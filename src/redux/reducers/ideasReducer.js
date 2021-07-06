const initialState = {
  selected: [],
  data: [
    [
      "1)Maximize the Beauty - fully channel the beauty with in. Maybe ask what makes this moment beautiful? See if beauty can be increased in every situation. MtB also could be taken as a use of reason and also a disciplining of the senses to focus on beauty (i.e. all the pretty flowers, all the pretty birds). (Update 3-16-21 -This is one of the first 4 points created because they were on the top of my mind when I first started this project. Maximize the Beauty and Full Expression still are some of the concepts I am most influenced by, create an ethos around, consider to be primary to my concept of virtue, and aim to implement as much as possible.)",
      "fun","positive", "inspiring"
    ],
    [
      "2)Full Expression - it takes a lot of effort for one to understand who they are when they are comfortable and how to channel the most real expressions of themselves what holds people back? Shyness, distraction (inability to focus on that which they want express",
      "inspiring","positive"
    ],
    [
      "5) Various meditation - I am a big fan of meditation techniques that help train the mind from moment to moment. There are various techniques that help provide concentration and awareness in the passing moments within shorter intervals than traditional formal meditation. While using a timer to make sure you meditate for at least 10 minutes is helpful. A stopwatch to monitor your awareness of time and to also use time to monitor your concentration and awareness. A and C are essential to have Full Expression. Update 2-26-19 - Passive observation ala Krishnamurti. Just chill. Dont do anything. Just observe whatever is present. Don't react to thoughts just observe them. Don't interact with them. If they are mind blowing write them down. Then return to just chilling and observing.", "chill", "rational"
    ],
    [
      "11) - complexity - avoid decision --> in a way it’s better to just do nothing and avoid any of the consequences that come from failure to appropriately analyze complex decisions. The complexity I am interested in is that which involves morality, love, health, and satisfaction.", "inspiring", "positive",
    ],
  ],
};

const ideasReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SelectCategory": {
      const result = state.data.filter((item) => item[2] == action.payload);
      return {
        ...state,
        selected: result,
      };
    }
    default:
      return state;
  }
};

export default ideasReducer;
