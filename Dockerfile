# --------------------
# STAGE 1: Build the React Application
# --------------------
# Stage 1: Build stage
FROM node:20.10.0 as build

# 1. CRITICAL: Declare the build argument to receive the value from the CI/CD
ARG REACT_APP_API_URL

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

# 2. CRITICAL: Use the build argument as an environment variable during 'npm run build'
# This bakes the value into the static JS bundle, fixing the 'undefined' issue.
RUN REACT_APP_API_URL=$REACT_APP_API_URL npm run build

# --------------------
# STAGE 2: Serve the Static Files (using Nginx or similar)
# --------------------
# Stage 2: Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

# Copy the build output from the first stage
COPY --from=build /app/build .

# Expose port 80 and start Nginx
EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
