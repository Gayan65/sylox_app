# --------------------
# STAGE 1: Build the React Application
# --------------------
# Stage 1: Build stage
FROM node:20.10.0 as build

# 1. CRITICAL: Declare the build argument to receive the value from the CI/CD
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
# 2. FIX: FORCE SHELL EXPANSION & CLEAN ASSIGNMENT
# We use 'sh -c' to ensure clean variable expansion. This reliably prevents the shell from including 
# the variable name in the value, which is causing the malformed URL.
# RUN sh -c "REACT_APP_API_URL=$REACT_APP_API_URL npm run build"

# --------------------
# STAGE 2: Serve the Static Files (using Nginx or similar)
# --------------------
# Stage 2: Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

# Copy the build output from the first stage
COPY --from=build /app/build .

# Copy a custom Nginx config to handle React routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 and start Nginx
EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
