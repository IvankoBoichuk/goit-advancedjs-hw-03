import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const m=async r=>{const t="49625718-2fc374da92b01abb8788a4564",s="https://pixabay.com/api/",n=new URLSearchParams({key:t,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}?${n.toString()}`;return fetch(e).then(o=>o.json())},u=(r,{webformatURL:t,largeImageURL:s,tags:n,likes:e,views:o,comments:a,downloads:c})=>r+`
        <li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img
                    class="gallery-image"
                    src="${t}"
                    data-source="${s}"
                    alt="${n}"
                />
            </a>
            <ul class="gallery-item--list">
                <li class="gallery-item--info">
                    <b>Likes</b>
                    <span>${e}</span>
                </li>
                <li class="gallery-item--info">
                    <b>Views</b>
                    <span>${o}</span>
                </li>
                <li class="gallery-item--info">
                    <b>Comments</b>
                    <span>${a}</span>
                </li>
                <li class="gallery-item--info">
                    <b>Downloads</b>
                    <span>${c}</span>
                </li>
            </ul>
        </li>
    `,f=(r,t)=>{const s=t.reduce(u,"");r.innerHTML=s},g=r=>{const t=document.createElement("li");t.id="loader",t.innerHTML='<div class="loader">Loading...</div>',r.innerHTML="",r.appendChild(t)},p=()=>{document.getElementById("loader").remove()},i={form:document.getElementById("search-form"),gallery:document.getElementById("gallery")};document.addEventListener("DOMContentLoaded",()=>{const r=new d(".gallery a");i.gallery.addEventListener("click",y),i.form.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(t.target).get("q");if(!n){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}g(i.gallery),m(n).then(e=>{if(e.hits.length===0){l.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!".',position:"topRight"}),p();return}f(i.gallery,e.hits),r.refresh()}).catch(e=>{console.error("Error fetching images:",e)})})});const y=r=>{r.preventDefault(),r.target.classList.contains("gallery-image")};
//# sourceMappingURL=index.js.map
