import{S as u,i as l}from"./assets/vendor-B07T6_gy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const n=document.querySelector(".gallery"),d=new u(".gallery .gallery-item a",{captionDelay:250,captionsData:"alt"});function p(i){const t=i.map(e=>`
        <li class="gallery-item">
            <a href="${e.largeImageURL}">
                <div class="image-wrapper"><img src="${e.webformatURL}" alt="${e.tags}" /></div>
                <ul class="image-description">
                    <li class="gallery-description">
                        <h3 class="description-title">Likes</h3>
                        <p class="description-value">${e.likes}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Views</h3>
                        <p class="description-value">${e.views}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Comments</h3>
                        <p class="description-value">${e.comments}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Downloads</h3>
                        <p class="description-value">${e.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
        `).join("");n.innerHTML=t+'<li class="gallery-item">',d.refresh()}function h(){n.innerHTML=""}const c=document.querySelector(".loader");function f(){c.hidden=!1}function m(){c.hidden=!0}const g="27649790-7921965d78458e948654f4c92",y="https://pixabay.com/api/?";function w(i){return new Promise((t,e)=>{const o=new URLSearchParams({key:g,image_type:"photo",orientation:"horizontal",safesearch:!0,q:i||""});fetch(y+o.toString(),{method:"GET"}).then(t).catch(e)}).then(t=>{if(t.status!==200||!t.ok)throw new Error("Request is failed with status: "+t.status);return t.json()})}const L=document.querySelector("form");L.addEventListener("submit",i=>{i.preventDefault();const t=i.target.search.value.trim();if(!t)return l.warning({position:"topRight",message:"Please fill-in the search input"});i.target.reset(),h(),f(),w(t).then(e=>{if(e.totalHits===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");p(e.hits)}).catch(e=>{l.warning({position:"topRight",message:e.message})}).finally(()=>{m()})});
//# sourceMappingURL=index.js.map
