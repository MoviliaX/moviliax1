# ==================================
# MOVILIAX - Makefile
# ==================================
# Comandos útiles para desarrollo

.PHONY: help dev build start stop restart clean logs install test

# Variables
DOCKER_COMPOSE = docker-compose
NPM = npm

# Color output
CYAN = \033[0;36m
GREEN = \033[0;32m
YELLOW = \033[0;33m
RED = \033[0;31m
NC = \033[0m # No Color

##@ General

help: ## Mostrar esta ayuda
	@echo "$(CYAN)═══════════════════════════════════════$(NC)"
	@echo "$(CYAN)  MOVILIAX - Comandos Disponibles$(NC)"
	@echo "$(CYAN)═══════════════════════════════════════$(NC)"
	@awk 'BEGIN {FS = ":.*##"; printf "\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  $(GREEN)%-15s$(NC) %s\n", $$1, $$2 } /^##@/ { printf "\n$(YELLOW)%s$(NC)\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
	@echo ""

##@ Desarrollo Local (sin Docker)

install: ## Instalar dependencias npm
	@echo "$(GREEN)📦 Instalando dependencias...$(NC)"
	$(NPM) install

dev: ## Iniciar servidor de desarrollo local
	@echo "$(GREEN)🚀 Iniciando servidor de desarrollo...$(NC)"
	$(NPM) run dev

build-local: ## Build de producción local
	@echo "$(GREEN)🔨 Compilando aplicación...$(NC)"
	$(NPM) run build

start-local: ## Iniciar servidor de producción local
	@echo "$(GREEN)▶️  Iniciando servidor...$(NC)"
	$(NPM) start

##@ Docker

docker-build: ## Build de imagen Docker
	@echo "$(GREEN)🐳 Construyendo imagen Docker...$(NC)"
	docker build -t moviliax:latest .

docker-dev: ## Levantar stack completo de desarrollo
	@echo "$(GREEN)🐳 Levantando servicios Docker...$(NC)"
	$(DOCKER_COMPOSE) up -d
	@echo "$(GREEN)✅ Servicios iniciados:$(NC)"
	@echo "  - App: http://localhost:3000"
	@echo "  - PostgreSQL: localhost:5432"
	@echo "  - Redis: localhost:6379"

docker-dev-cms: ## Levantar con Strapi CMS incluido
	@echo "$(GREEN)🐳 Levantando servicios con CMS...$(NC)"
	$(DOCKER_COMPOSE) --profile cms up -d
	@echo "$(GREEN)✅ Servicios iniciados:$(NC)"
	@echo "  - App: http://localhost:3000"
	@echo "  - Strapi: http://localhost:1337"

docker-dev-tools: ## Levantar con herramientas de desarrollo
	@echo "$(GREEN)🐳 Levantando servicios con herramientas...$(NC)"
	$(DOCKER_COMPOSE) --profile tools up -d
	@echo "$(GREEN)✅ Servicios iniciados:$(NC)"
	@echo "  - pgAdmin: http://localhost:5050"

docker-stop: ## Detener servicios Docker
	@echo "$(YELLOW)⏸️  Deteniendo servicios...$(NC)"
	$(DOCKER_COMPOSE) down

docker-restart: ## Reiniciar servicios Docker
	@echo "$(YELLOW)🔄 Reiniciando servicios...$(NC)"
	$(DOCKER_COMPOSE) restart

docker-logs: ## Ver logs de servicios
	$(DOCKER_COMPOSE) logs -f

docker-logs-app: ## Ver logs solo de la app
	$(DOCKER_COMPOSE) logs -f app

docker-clean: ## Limpiar volúmenes y contenedores
	@echo "$(RED)🧹 Limpiando contenedores y volúmenes...$(NC)"
	$(DOCKER_COMPOSE) down -v
	docker system prune -f

##@ Base de Datos

db-migrate: ## Ejecutar migraciones de base de datos
	@echo "$(GREEN)🗃️  Ejecutando migraciones...$(NC)"
	$(NPM) run db:migrate

db-seed: ## Poblar base de datos con datos de prueba
	@echo "$(GREEN)🌱 Poblando base de datos...$(NC)"
	$(NPM) run db:seed

db-reset: ## Resetear base de datos
	@echo "$(YELLOW)⚠️  Reseteando base de datos...$(NC)"
	$(NPM) run db:reset

db-shell: ## Conectar a PostgreSQL shell
	@echo "$(GREEN)🐘 Conectando a PostgreSQL...$(NC)"
	docker exec -it moviliax-postgres psql -U moviliax -d moviliax_db

##@ Testing y Calidad

lint: ## Ejecutar linter
	@echo "$(GREEN)🔍 Ejecutando linter...$(NC)"
	$(NPM) run lint

lint-fix: ## Corregir problemas de linter
	@echo "$(GREEN)🔧 Corrigiendo código...$(NC)"
	$(NPM) run lint:fix

format: ## Formatear código con Prettier
	@echo "$(GREEN)✨ Formateando código...$(NC)"
	$(NPM) run format

test: ## Ejecutar tests
	@echo "$(GREEN)🧪 Ejecutando tests...$(NC)"
	$(NPM) run test

test-watch: ## Ejecutar tests en modo watch
	@echo "$(GREEN)👀 Ejecutando tests en modo watch...$(NC)"
	$(NPM) run test:watch

type-check: ## Verificar tipos TypeScript
	@echo "$(GREEN)📝 Verificando tipos...$(NC)"
	$(NPM) run type-check

##@ Producción

deploy-vercel: ## Deploy a Vercel
	@echo "$(GREEN)🚀 Desplegando a Vercel...$(NC)"
	vercel --prod

analyze: ## Analizar bundle size
	@echo "$(GREEN)📊 Analizando tamaño del bundle...$(NC)"
	$(NPM) run analyze

##@ Utilidades

status: ## Ver estado de servicios Docker
	@echo "$(CYAN)📊 Estado de servicios:$(NC)"
	$(DOCKER_COMPOSE) ps

shell: ## Abrir shell en el contenedor de la app
	@echo "$(GREEN)🐚 Abriendo shell...$(NC)"
	docker exec -it moviliax-app sh

clean-cache: ## Limpiar cache de Next.js
	@echo "$(GREEN)🧹 Limpiando cache...$(NC)"
	rm -rf .next
	rm -rf node_modules/.cache

backup-db: ## Backup de base de datos
	@echo "$(GREEN)💾 Creando backup...$(NC)"
	docker exec moviliax-postgres pg_dump -U moviliax moviliax_db > backup_$(shell date +%Y%m%d_%H%M%S).sql
	@echo "$(GREEN)✅ Backup creado$(NC)"

##@ Información

info: ## Mostrar información del proyecto
	@echo "$(CYAN)═══════════════════════════════════════$(NC)"
	@echo "$(CYAN)  MOVILIAX - Información del Proyecto$(NC)"
	@echo "$(CYAN)═══════════════════════════════════════$(NC)"
	@echo "$(GREEN)Node:$(NC) $$(node --version)"
	@echo "$(GREEN)NPM:$(NC) $$(npm --version)"
	@echo "$(GREEN)Docker:$(NC) $$(docker --version)"
	@echo "$(GREEN)Docker Compose:$(NC) $$(docker-compose --version)"
	@echo ""
	@echo "$(CYAN)URLs de Desarrollo:$(NC)"
	@echo "  - Frontend: http://localhost:3000"
	@echo "  - API: http://localhost:3000/api"
	@echo "  - PostgreSQL: localhost:5432"
	@echo "  - Redis: localhost:6379"
	@echo "  - Strapi: http://localhost:1337"
	@echo "  - pgAdmin: http://localhost:5050"
	@echo ""
