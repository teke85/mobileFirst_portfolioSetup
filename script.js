const overlay = document.querySelector('.mobile-overlay');

function mytoggleMenu() {
  overlay.classList.toggle('hide-js');
}
mytoggleMenu();

const projects = [
  {
    id: 1,
    title: 'Tonic',
    info: {
      client: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    screenshot: 'images/works/image_1.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    skills: ['html', 'css', 'javascript'],
    liveLink: 'https://www.canopy.cr/tonic',
    sourceLink: 'https://www.canopy.cr/tonic',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    info: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: 2015,
    },
    screenshot: 'images/works/image_2.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: 'https://www.facebook.com/',
    sourceLink: 'https://www.facebook.com/',
  },
  {
    id: 3,
    title: 'Facebook 360',
    info: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: 2015,
    },
    screenshot: 'images/works/image_3.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: 'https://www.facebook.com/',
    sourceLink: 'https://www.facebook.com/',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    info: {
      client: 'Uber',
      role: 'Lead Developer',
      year: 2018,
    },
    screenshot: 'images/works/image_4.png',
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    skills: ['html', 'css', 'javascript', 'Ruby on rails'],
    liveLink: 'https://www.uber.com/',
    sourceLink: 'https://www.uber.com/',
  },
];
