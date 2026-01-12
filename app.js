const posts = [
  {
    id: 1,
    author: "Amari Doyle",
    handle: "@amarid",
    time: "2h ago",
    avatar: "https://picsum.photos/seed/user1/80",
    content:
      "Just wrapped a community meetup on mindful product design. The energy was unreal! What topics would you love to discuss next?",
    likes: 128,
    comments: 24,
  },
  {
    id: 2,
    author: "Riya Patel",
    handle: "@riya",
    time: "5h ago",
    avatar: "https://picsum.photos/seed/user2/80",
    content:
      "Experimenting with a new ambient playlist while sketching. Drop your favorite focus tracks below!",
    likes: 92,
    comments: 13,
  },
  {
    id: 3,
    author: "Kai Nakamura",
    handle: "@kain",
    time: "Yesterday",
    avatar: "https://picsum.photos/seed/user3/80",
    content:
      "Built a micro-community for indie founders. Already 40 members in 24 hours. If you're building in public, let's connect.",
    likes: 210,
    comments: 47,
  },
];

const feed = document.querySelector("#feed");
const postForm = document.querySelector("#post-form");
const postText = document.querySelector("#post-text");

const createPostCard = (post) => {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <div class="post-header">
      <img src="${post.avatar}" alt="${post.author}" />
      <div>
        <strong>${post.author}</strong>
        <span>${post.handle} · ${post.time}</span>
      </div>
    </div>
    <p class="post-content">${post.content}</p>
    <div class="post-actions">
      <button data-action="like">❤ ${post.likes}</button>
      <button data-action="comment">💬 ${post.comments}</button>
      <button data-action="share">↗ Share</button>
    </div>
  `;

  const likeButton = card.querySelector('[data-action="like"]');
  likeButton.addEventListener("click", () => {
    post.likes += 1;
    likeButton.classList.add("active");
    likeButton.textContent = `❤ ${post.likes}`;
  });

  return card;
};

const renderFeed = () => {
  feed.innerHTML = "";
  posts.forEach((post) => feed.appendChild(createPostCard(post)));
};

postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = postText.value.trim();
  if (!value) return;

  posts.unshift({
    id: Date.now(),
    author: "Jordan Lee",
    handle: "@jordanlee",
    time: "Just now",
    avatar: "https://picsum.photos/seed/newuser/80",
    content: value,
    likes: 0,
    comments: 0,
  });

  postText.value = "";
  renderFeed();
});

renderFeed();
