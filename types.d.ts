interface sanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface image {
  _type: image;
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export interface social extends sanityBody {
  email: string;
  linkedin: string;
  github: string;
  website: string;
}
export interface project extends sanityBody {
  projectName: string;
  _type: "projects";
  projectDescription: string;
  projectGithub: string;
  projectLink: string;
  projectImage: image;
}

export interface about extends sanityBody {
  description: string;
  image: image;
}
export interface user extends sanityBody {
  slogan1: string;
  slogan2: string;
  slogan3: string;
  slogan4: string;
  image: image;
}
