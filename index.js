import{S as h,a as g,i as n}from"./assets/vendor-swiqEEHW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const d=document.querySelector(".gallery"),m=new h(".gallery .gallery-item a",{captionDelay:250,captionsData:"alt"});function y(e){const t=e.map(r=>`
        <li class="gallery-item">
            <a href="${r.largeImageURL}">
                <div class="image-wrapper"><img src="${r.webformatURL}" alt="${r.tags}" /></div>
                <ul class="image-description">
                    <li class="gallery-description">
                        <h3 class="description-title">Likes</h3>
                        <p class="description-value">${r.likes}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Views</h3>
                        <p class="description-value">${r.views}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Comments</h3>
                        <p class="description-value">${r.comments}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Downloads</h3>
                        <p class="description-value">${r.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
        `).join("");d.insertAdjacentHTML("beforeend",t),m.refresh()}function w(){d.innerHTML=""}const u=document.querySelector(".loader");function L(){u.hidden=!1}function b(){u.hidden=!0}const v="27649790-7921965d78458e948654f4c92",S="https://pixabay.com/api/",q=g.create({baseURL:S,timeout:1e3,params:{key:v}}),i={page:1,total:null,query:"",per_page:15};async function M(e){e&&(i.page=1);const t={image_type:"photo",orientation:"horizontal",safesearch:!0,q:e||i.query,per_page:i.per_page,page:i.page},r=await q.request({params:t});if(i.total=r.data.total,i.page+=1,e&&(i.query=e),r.status!==200)throw new Error(r.status);return r.data}const l=document.querySelector(".load-more");function R({page:e,total:t,per_page:r}){t-(e-1)*r>0?$():p()}function $(){l.hidden=!1}function p(){l.hidden=!0}function P(){return l.hidden===!0}const E=document.querySelector("form"),H=document.querySelector(".load-more");E.addEventListener("submit",e=>{e.preventDefault();const t=e.target.search.value.trim();if(!t)return n.warning({position:"topRight",message:"Please fill-in the search input"});e.target.reset(),p(),w(),L(),f(t)});H.addEventListener("click",async e=>{await f(),O(),P()&&n.success({position:"topRight",message:"We're sorry, but you've reached the end of search results."})});async function f(e){try{const t=await M(e);if(t.totalHits===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");y(t.hits)}catch(t){n.warning({position:"topRight",message:t.message})}b(),R(i)}function O(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
