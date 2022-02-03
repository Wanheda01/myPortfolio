/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "Wanheda",
  email: "nealkankaria@gmail.com",
  about:
    "Hey! I'm <b>Wanheda</b>, a sixteen years old <b>Graphic Designer</b> currently based in <b>India</b>.",

  // intro
  accomplishments: {
    name: "Recent Accomplishments",
    value: [
      "Learned using blender",
      "Started a side project",
    ],
  },
  socialLink: {
    name: "Social Links",
    value: [
      { name: "Instagram", link: "https://www.instagram.com/wanhedadzn/" },
      { name: "Twitter", link: "https://twitter.com/WanhedaDZN" },
    ],
  },
  currentProfession: {
    name: "Currently",
	  value: [
		  "Doing contract/freelance work",
		  "Available for new projects"
	  ],
  },

  // Footer
  contactDetails: {
    name: "Ways to contact me",
    value: [
      {
        name: "Gmail",
        value: "nealkankaria@gmail.com",
      },
      {
        name: "Discord",
        value: "WanhedaDZN#2627",
      },
    ],
  },
  currentStatus: {
    name: "What am I upto right now",
    value: [
      "Walking my dog in the park",
      "Making dog excuse to gawk at the hot girl",
    ],
  },

  // work
  // image min-dimensions: 1640x600
  // image format: jpg, png, webp
  // if image is from an external source then add the domain in next.config.js
  workExperience: [
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
	      "My Objectives": [
	        "User Testing",
	        "Accessibility improvements"
	      ],
      },

      link: "/",
      image: "/images/apple.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing",
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/spiderman.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing", 
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/microsoft.png",
    },
  ],

  // available options:- light, dark, auto
  theme: "light",
};
