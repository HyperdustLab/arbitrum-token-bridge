# Use Node.js 18.x as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the rest of the project files
COPY . .

RUN cd packages/arb-token-bridge-ui/

# Install project dependencies
RUN yarn

RUN npm run lint:fix

# Build the project (optional, if a build step is needed)
RUN yarn build

# Expose the application port (set the port according to your application)
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
