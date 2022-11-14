import { groq } from "next-sanity";

export const socialsQuery = groq`*[_type == "socials"]{
    github,linkedin,website,email}`;

export const projectsQuery = groq`
    *[_type == "projects"]{
      projectImage,projectName,projectGithub,projectDescription,projectDemo,_id
      
    }`;

export const aboutQuery = groq`
    *[_type == "about"]{
    image,description
      
    }`;

export const userQuery = groq`
    *[_type == "user"]{
    image,slogan1,slogan2,slogan3,slogan4
    }`;

export const singleprojectQueryFunction = (id: string) => {
  const singleProjectQuery = groq`
        *[_type == "projects" && _id == '${id}']{
          ...
            
        }`;
  return singleProjectQuery;
};
