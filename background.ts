// /**
//  * Updating a redirect rule using the Declarative Net Request API in a Chrome extension. 
//  * @param newRedirectUrl 
//  */
// async function setRedirectRule (newRedirectUrl: string) {
//   let newRedirectRule = {
//     id: 1,
//     priority: 1,
//     action: {
//         type: 'redirect',
//         redirect: { url: newRedirectUrl } 
//     },
//     condition: {
//         urlFilter: "*://*/*",
//         excludedInitiatorDomains: [
//           "leetcode.com",
//           "www.leetcode.com",
//           "developer.chrome.com"
//         ],
//         resourceTypes: ["main_frame"]
//       }
//     }
//     // console.log("New Redirect Rule:", newRedirectRule);
//     try{
//       //Ensure that the chrome.declarativeNetRequest.updateDynamicRules method is available in your Chrome environment
//       if (chrome && chrome.declarativeNetRequest && chrome.declarativeNetRequest.updateDynamicRules){
//         await chrome.declarativeNetRequest.updateDynamicRules({
//           removeRuleIds: [1],
//           //@ts-ignore
//           addRules: [newRedirectRule]
//         });
//       console.log("redirect Rule updated")
//       }else {
//         console.log("chrome.declarativeNetRequest.updateDynamicRules is not available");
//       }
//   }catch(error){
//     console.error("Error changing rule:", error);
//     console.log("Did not change rule");
//   }
// }
// setRedirectRule("https://leetcode.com/problemset/all/");


// //Helper function
// const isSubmissionSuccessURL = (url: string) =>
//   url.includes("/submissions/detail/") && url.includes("/check/")

// 
  