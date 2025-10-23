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

# 2. FIX: Reverting to the RUN command, ensuring the variable is passed cleanly
# We remove the ARG/ENV combination that was causing the malformed string.
# This forces the build-arg value to be the ONLY thing passed as the variable's value.
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
