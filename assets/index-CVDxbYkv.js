(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll("section"),o={root:null,rootMargin:"0px",threshold:.1},i=new IntersectionObserver((e,r)=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),r.unobserve(t.target))})},o);n.forEach(e=>{e.classList.add("fade-in"),i.observe(e)});const s=document.querySelector(".btn-primary");s&&s.addEventListener("click",()=>{alert("¡Gracias por tu interés! El formulario de registro se abrirá pronto.")})});
