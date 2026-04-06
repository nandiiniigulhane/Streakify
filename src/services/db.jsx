import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const collectionName = "users";
const habitCollection = "habits";

async function addUser(name, email) {
  const uid = localStorage.getItem("uid");
  try {
    const userRef = doc(db, collectionName, uid);
    const userData = {
      name: name,
      email: email,
    };
    await setDoc(userRef, userData);
  } catch (error) {
    console.error(error.message);
  }
}

async function addHabit(habit) {
  const uid = localStorage.getItem("uid");
  try {
    const habitRef = collection(db, collectionName, uid, habitCollection);
    const docRef = await addDoc(habitRef, habit);
    console.log("habit added!");
    return docRef.id;
  } catch (error) {
    console.error(error.message);
  }
}

async function updateHabitData(habitId, data) {
  const uid = localStorage.getItem("uid");
  try {
    const habitRef = doc(db, collectionName, uid, habitCollection, habitId);
    await updateDoc(habitRef, { data });
  } catch (error) {
    console.error(error.message);
  }
}

async function getHabits() {
  const uid = localStorage.getItem("uid");
  try {
    const querySnapshot = await getDocs(
      collection(db, collectionName, uid, habitCollection),
    );
    const habits = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return habits;
  } catch (error) {
    console.error(error.message);
  }
}

async function deleteHabitFromFirestore(id) {
  const uid = localStorage.getItem("uid");
  try {
    const ref = doc(db, collectionName, uid, habitCollection, id);
    await deleteDoc(ref);
  } catch (error) {
    console.error(error.message);
  }
}

export {
  addHabit,
  getHabits,
  addUser,
  updateHabitData,
  deleteHabitFromFirestore,
};
