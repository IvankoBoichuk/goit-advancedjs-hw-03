import{S as m,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=async t=>{const s="49625718-2fc374da92b01abb8788a4564",o="https://pixabay.com/api/",a=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}?${a.toString()}`;return fetch(e).then(r=>r.json())},f=(t,{webformatURL:s,largeImageURL:o,tags:a,likes:e,views:r,comments:i,downloads:d})=>t+`
        <li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <img
                    class="gallery-image"
                    src="${s}"
                    data-source="${o}"
                    alt="${a}"
                />
            </a>
            <ul class="gallery-item--list">
                <li class="gallery-item--info">
                    <b>Likes</b>
                    <span>${e}</span>
                </li>
                <li class="gallery-item--info">
                    <b>Views</b>
                    <span>${r}</span>
                </li>
                <li class="gallery-item--info">
                    <b>Comments</b>
                    <span>${i}</span>
                </li>
                <li class="gallery-item--info">
                    <b>Downloads</b>
                    <span>${d}</span>
                </li>
            </ul>
        </li>
    `,g=t=>{t.innerHTML=""},y=(t,s)=>{const o=s.reduce(f,"");t.innerHTML=o},p=t=>{t.classList.add("active")},c=t=>{t.classList.remove("active")},n={form:document.getElementById("search-form"),gallery:document.getElementById("gallery"),loader:document.getElementById("loader")};document.addEventListener("DOMContentLoaded",()=>{const t=new m(".gallery a");n.gallery.addEventListener("click",h),n.form.addEventListener("submit",s=>{s.preventDefault();const a=new FormData(s.target).get("q");if(!a){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}g(n.gallery),p(n.loader),u(a).then(e=>{if(e.hits.length===0){l.error({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!".',position:"topRight"}),c(n.loader);return}y(n.gallery,e.hits),t.refresh()}).catch(e=>{console.error("Error fetching images:",e)}).finally(()=>{c(n.loader)})})});const h=t=>{t.preventDefault(),t.target.classList.contains("gallery-image")};
//# sourceMappingURL=index.js.map
