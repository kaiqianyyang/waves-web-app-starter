import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query products($skip: Int!, $limit: Int!) {
    products(skip: $skip, limit: $limit) {
      total
      limit
      skip
      items {
        id
        thumbnail
        rating
        stock
        brand
        images
        title
        description
        price
        discountPercentage
        category
      }
    }
  }
`;

export const GET_USER_POSTS = gql`
  query userPosts($id: Int!, $skip: Int!, $limit: Int!) {
    userPosts(id: $id, skip: $skip, limit: $limit) {
      total
      limit
      skip
      items {
        id
        body
        reactions
        tags
        title
        userId
      }
    }
  }
`;

export const GET_ME = gql`
  query me {
    me {
      id
      firstName
      lastName
      username
    }
  }
`;

export const GET_PROFILE = gql`
  query profile($id: Int!) {
    profile(id: $id) {
      id
      username
      firstName
      lastName
      image
    }
  }
`;

export const GET_PRODUCT = gql`
  query product($id: Int!) {
    product(id: $id) {
      brand
      category
      description
      discountPercentage
      id
      images
      price
      rating
      stock
      thumbnail
      title
    }
  }
`;

export const GET_CART = gql`
  query cart($limit: Int!, $skip: Int!) {
    cart(limit: $limit, skip: $skip) {
      products {
        items {
          brand
          category
          description
          discountPercentage
          id
          images
          price
          rating
          stock
          thumbnail
          title
        }
        limit
        skip
        total
      }
      summary {
        subtotal
        tax
        total
      }
    }
  }
`;
