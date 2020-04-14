import { firestore } from "../firebase";

export const homeController = (req, res) => {
  res.render("home");
};
export const aboutController = (req, res) => {
  res.render("about");
};
export const postController = async (req, res) => {
  let postList = [];
  try {
    await firestore
      .collection("post")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          postList.push({
            id: doc.id,
            title: doc.data().title,
            desc: doc.data().desc,
            date: doc.data().date
          });
        });
      });
  } catch (error) {
    console.log(error);
  }
  res.render("post", { postList });
};
export const etcController = (req, res) => {
  res.render("etc");
};

export const deleteController = async (req, res) => {
  const {
    body: { id }
  } = req;

  try {
    await firestore
      .collection("post")
      .doc(id)
      .delete();
  } catch (error) {
    console.log(error);
  }

  postController(req, res);
};

export const writeController = (req, res) => {
  res.render("write");
};

export const writeControllerPost = async (req, res) => {
  const {
    body: { title, desc }
  } = req;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const currentDate = `${year}/${month}/${date}`;

  try {
    await firestore.collection("post").add({
      title: title,
      desc: desc,
      date: currentDate
    });
  } catch (error) {
    console.log(error);
  }

  postController(req, res);
};
