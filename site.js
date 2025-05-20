


const classesData = [
    {"course":"آشنايي با صنعت کامپيوتر","professor":"دکتر عابدي","location":"202","day":"شنبه","time":"7:30"},
    {"course":"روش پژوهش","professor":"دکتر عابدي","location":"202","day":"شنبه","time":"10"},
    {"course":"آشنايي با صنعت کامپيوتر","professor":"دکتر عابدي","location":"202","day":"شنبه","time":"13"},
    {"course":"ساختمان داده","professor":"مهندس زماني","location":"204","day":"شنبه","time":"13"},
    {"course":"اصول و طراحي کامپايلر","professor":"دکتر نوربخش","location":"205","day":"شنبه","time":"13"},
    {"course":"مدارهاي الکتريکي","professor":"دکتر سروش","location":"206","day":"شنبه","time":"7:30"},
    {"course":"رياضي مهندسي","professor":"دکتر سروش","location":"206","day":"شنبه","time":"13"},
    {"course":"زبان تخصصي","professor":"مهندس زماني","location":"209","day":"شنبه","time":"7:30"},
    {"course":"مدارهاي منطقي","professor":"مهندس زماني","location":"209","day":"شنبه","time":"10"},
    {"course":"هوش مصنوعي","professor":"دکتر عرباني","location":"303","day":"شنبه","time":"13"},
    {"course":"فيزيک 2","professor":"دکتر مهدي پور","location":"306","day":"شنبه","time":"7:30"},
    {"course":"فيزيک 2","professor":"دکتر مهدي پور","location":"306","day":"شنبه","time":"10"},
    {"course":"رياضي پيش","professor":"دکتر صابري","location":"307","day":"شنبه","time":"7:30"},
    {"course":"رياضي 1","professor":"دکتر صابري","location":"307","day":"شنبه","time":"10"},
    {"course":"آمار پيش","professor":"دکتر صابري","location":"307","day":"شنبه","time":"13"},
    {"course":"رياضي مهندسي","professor":"دکتر پارسا","location":"312","day":"شنبه","time":"7:30"},
    {"course":"رياضي مهندسي","professor":"دکتر پارسا","location":"312","day":"شنبه","time":"13"},
    {"course":"فارسي عمومي","professor":"دکتر صابري","location":"202","day":"يکشنبه","time":"13"},
    {"course":"مباني کامپيوتر","professor":"مهندس زماني","location":"203","day":"يکشنبه","time":"7:30"},
    {"course":"زبان تخصصي","professor":"مهندس زماني","location":"203","day":"يکشنبه","time":"10"},
    {"course":"برنامه نويسي کامپيوتر","professor":"دکتر مهدي نيا","location":"204","day":"يکشنبه","time":"10"},
    {"course":"مدارهاي الکتريکي","professor":"دکتر قديمي","location":"204","day":"يکشنبه","time":"13"},
    {"course":"ماشين مخصوص","professor":"دکتر مهدي نيا","location":"205","day":"يکشنبه","time":"13"},
    {"course":"سيگنال و سيستم","professor":"دکتر سحاب","location":"206","day":"يکشنبه","time":"13"},
    {"course":"رياضي پيش","professor":"دکتر ميرنوري","location":"209","day":"يکشنبه","time":"7:30"},
    {"course":"رياضيات گسسته","professor":"دکتر خجسته","location":"302","day":"يکشنبه","time":"7:30"},
    {"course":"رياضيات گسسته","professor":"دکتر خجسته","location":"302","day":"يکشنبه","time":"100"},
    {"course":"فيزيک پيش","professor":"دکتر فاضلي","location":"302","day":"يکشنبه","time":"13"},
    {"course":"فيزيک 1","professor":"دکتر فاضلي","location":"302","day":"يکشنبه","time":"15:30"},
    {"course":"فيزيک 2","professor":"دکتر احمدي","location":"306","day":"يکشنبه","time":"7:30"},
    {"course":"فيزيک 2","professor":"دکتر احمدي","location":"306","day":"يکشنبه","time":"13"},
    {"course":"فارسي 1","professor":"استاد خوشه چين","location":"307","day":"يکشنبه","time":"13"},
    {"course":"برنامه سازي پيشرفته","professor":"دکتر خوب کار","location":"310","day":"يکشنبه","time":"7:30"},
    {"course":"برنامه سازي پيشرفته","professor":"دکتر خوب کار","location":"310","day":"يکشنبه","time":"10"},
    {"course":"طراحي الگوريتم","professor":"دکتر خوب کار","location":"310","day":"يکشنبه","time":"13"},
    {"course":"معادلات ديفرانسيل","professor":"دکتر يعقوب نيا","location":"312","day":"يکشنبه","time":"13"},
    {"course":"فيزيک 2","professor":"دکتر واجاري","location":"312","day":"يکشنبه","time":"15:30"},
    {"course":"نظريه زبان و ماشين","professor":"دکتر عرباني","location":"201","day":"دوشنبه","time":"13"},
    {"course":"مدارهاي الکتريکي","professor":"دکتر احمدپور","location":"202","day":"دوشنبه","time":"7:30"},
    {"course":"تحليل و طراحي سيستم","professor":"دکتر مجتهدي","location":"202","day":"دوشنبه","time":"13"},
    {"course":"فيزيک 1","professor":"دکتر مهدي پور","location":"205","day":"دوشنبه","time":"7:30"},
    {"course":"فيزيک پيش","professor":"دکتر مهدي پور","location":"205","day":"دوشنبه","time":"10"},
    {"course":"هوش مصنوعي","professor":"دکتر يمقاني","location":"205","day":"دوشنبه","time":"13"},
    {"course":"معماري کامپيوتر","professor":"دکتر فلاح کاظمي","location":"206","day":"دوشنبه","time":"13"},
    {"course":"معماري کامپيوتر","professor":"دکتر فلاح کاظمي","location":"206","day":"دوشنبه","time":"15:30"},
    {"course":"طراحي الگوريتم","professor":"دکتر خوب کار","location":"207","day":"دوشنبه","time":"7:30"},
    {"course":"طراحي الگوريتم","professor":"دکتر خوب کار","location":"207","day":"دوشنبه","time":"10"},
    {"course":"طراحي الگوريتم","professor":"دکتر خوب کار","location":"207","day":"دوشنبه","time":"13"},
    {"course":"زبان تخصصي","professor":"مهندس زماني","location":"208","day":"دوشنبه","time":"7:30"},
    {"course":"مباحث ويژه 1","professor":"مهندس زماني","location":"208","day":"دوشنبه","time":"10"},
    {"course":"شبکه هاي کامپيوتري","professor":"مهندس زماني","location":"208","day":"دوشنبه","time":"13"},
    {"course":"نظريه زبان و ماشين","professor":"دکتر عليمرادي","location":"301","day":"دوشنبه","time":"7:30"},
    {"course":"مهندسي نرم افزار","professor":"دکتر عليمرادي","location":"301","day":"دوشنبه","time":"10"},
    {"course":"نظريه زبان و ماشين","professor":"دکتر عليمرادي","location":"301","day":"دوشنبه","time":"13"},
    {"course":"فيزيک 2","professor":"دکتر احمدي","location":"302","day":"دوشنبه","time":"7:30"},
    {"course":"برنامه سازي کامپيوتر","professor":"دکتر برجي","location":"302","day":"دوشنبه","time":"10"},
    {"course":"رياضي 1","professor":"دکتر پورعليزاده","location":"302","day":"دوشنبه","time":"13"},
    {"course":"برنامه سازي پيشرفته","professor":"دکتر حدادي","location":"303","day":"دوشنبه","time":"7:30"},
    {"course":"کارگاه کامپيوتر","professor":"دکتر حدادي","location":"303","day":"دوشنبه","time":"10"},
    {"course":"برنامه سازي پيشرفته","professor":"دکتر حدادي","location":"303","day":"دوشنبه","time":"13"},
    {"course":"کارگاه کامپيوتر","professor":"دکتر حدادي","location":"303","day":"دوشنبه","time":"15:30"},
    {"course":"هوش محاسباتي","professor":"دکتر خوشحال","location":"304","day":"دوشنبه","time":"7:30"},
    {"course":"اصول رباتيکز","professor":"دکتر خوشحال","location":"304","day":"دوشنبه","time":"10"},
    {"course":"مباني پردازش زبان","professor":"دکتر خوشحال","location":"304","day":"دوشنبه","time":"13"},
    {"course":"مدارهاي منطقي","professor":"دکتر سروش","location":"305","day":"دوشنبه","time":"13"},
    {"course":"معادلات ديفرانسيل","professor":"دکتر اميرمحمدي","location":"306","day":"دوشنبه","time":"7:30"},
    {"course":"رياضي 2","professor":"دکتر اميرمحمدي","location":"306","day":"دوشنبه","time":"10"},
    {"course":"معادلات ديفرانسيل","professor":"دکتر مسروري","location":"306","day":"دوشنبه","time":"13"},
    {"course":"رياضي 2","professor":"دکتر پارسا","location":"307","day":"دوشنبه","time":"7:30"},
    {"course":"رياضي 2","professor":"دکتر پارسا","location":"307","day":"دوشنبه","time":"13"},
    {"course":"روش تحقيق و سمينار","professor":"دکتر فلاح راد","location":"308","day":"دوشنبه","time":"7:30"},
    {"course":"شبکه هاي کامپيوتري","professor":"دکتر فلاح راد","location":"308","day":"دوشنبه","time":"10"},
    {"course":"پايگاه داده","professor":"دکتر فلاح راد","location":"308","day":"دوشنبه","time":"13"},
    {"course":"هوش محاسباتي","professor":"دکتر آقابابايي","location":"202","day":"سه شنبه","time":"7:30"},
    {"course":"مباحث تجارت الکترونيک","professor":"دکتر فلاح راد","location":"203","day":"سه شنبه","time":"10"},
    {"course":"هوش تجاري","professor":"دکتر نوربخش","location":"203","day":"سه شنبه","time":"13"},
    {"course":"مهندسي اينترنت","professor":"دکتر فلاح راد","location":"203","day":"سه شنبه","time":"15:30"},
    {"course":"بازاريابي الکترونيک","professor":"دکتر خوشحال","location":"204","day":"سه شنبه","time":"7:30"},
    {"course":"مباني پردازش زبان","professor":"دکتر خوشحال","location":"204","day":"سه شنبه","time":"10"},
    {"course":"اصول رباتيکز","professor":"دکتر خوشحال","location":"204","day":"سه شنبه","time":"13"},
    {"course":"مهندسي زنجيره عرضه","professor":"دکتر يمقاني","location":"204","day":"سه شنبه","time":"15:30"},
    {"course":"معادلات ديفرانسيل","professor":"دکتر اميرمحمدي","location":"205","day":"سه شنبه","time":"7:30"},
    {"course":"رياضي 2","professor":"دکتر بهرام احمدي","location":"205","day":"سه شنبه","time":"10"},
    {"course":"معادلات ديفرانسيل","professor":"دکتر مسروري","location":"205","day":"سه شنبه","time":"13"},
    {"course":"سيگنال و سيستم","professor":"دکتر رستمي","location":"206","day":"سه شنبه","time":"10"},
    {"course":"سيستم هاي عامل","professor":"دکتر مجتهدي","location":"207","day":"سه شنبه","time":"13"},
    {"course":"بينايي کامپيوتر","professor":"دکتر آقابابايي","location":"208","day":"سه شنبه","time":"10"},
    {"course":"زبان تخصصي","professor":"دکتر خزايي","location":"209","day":"سه شنبه","time":"10"},
    {"course":"روش تحقيق","professor":"دکتر فاضلي","location":"301","day":"سه شنبه","time":"7:30"},
    {"course":"فارسي","professor":"دکتر داداشي","location":"301","day":"سه شنبه","time":"15:30"},
    {"course":"رياضي 2","professor":"دکتر بهرام احمدي","location":"302","day":"سه شنبه","time":"7:30"},
    {"course":"رياضي 2","professor":"دکتر رفاهي","location":"304","day":"سه شنبه","time":"7:30"},
    {"course":"رياضي مهندسي","professor":"دکتر رفاهي","location":"304","day":"سه شنبه","time":"10"},
    {"course":"معادلات ديفرانسيل","professor":"دکتر بهرام احمدي","location":"306","day":"سه شنبه","time":"10"},
    {"course":"معماري کامپيوتر","professor":"دکتر فلاح کاظمي","location":"306","day":"سه شنبه","time":"13"},
    {"course":"طراحي سيستم ديجيتال","professor":"دکتر فلاح کاظمي","location":"306","day":"سه شنبه","time":"15:30"},
    {"course":"معماري کامپيوتر","professor":"دکتر فلاح کاظمي","location":"307","day":"سه شنبه","time":"10"},
    {"course":"رياضيات گسسته","professor":"دکتر کردرستمي","location":"308","day":"سه شنبه","time":"7:30"},
    {"course":"رياضيات گسسته","professor":"دکتر کردرستمي","location":"308","day":"سه شنبه","time":"10"},
    {"course":"سيستم هاي توزيع شده","professor":"دکتر فلاح راد","location":"202","day":"چهارشنبه","time":"7:30"},
    {"course":"آزمون نرم افزار پيشرفته","professor":"دکتر فلاح راد","location":"202","day":"چهارشنبه","time":"10"},
    {"course":"يادگيري ماشين","professor":"دکتر نوربخش","location":"202","day":"چهارشنبه","time":"13"},
    {"course":"هوش مصنوعي","professor":"دکتر نوربخش","location":"202","day":"چهارشنبه","time":"15:30"},
    {"course":"يادگيري ماشين","professor":"دکتر خوشحال","location":"203","day":"چهارشنبه","time":"7:30"},
    {"course":"شناسايي الگو","professor":"دکتر خوشحال","location":"203","day":"چهارشنبه","time":"10"},
    {"course":"تحليل کلان داده ها","professor":"دکتر عرباني","location":"203","day":"چهارشنبه","time":"13"},
    {"course":"رايانش عصبي و يادگيري عميق","professor":"دکتر عرباني","location":"203","day":"چهارشنبه","time":"15:30"},
    {"course":"پايگاه داده پيشرفته","professor":"دکتر خوب کار","location":"204","day":"چهارشنبه","time":"7:30"},
    {"course":"نظريه الگوريتمي بازي ها","professor":"دکتر خوب کار","location":"204","day":"چهارشنبه","time":"10"},
    {"course":"ارزيابي کارايي سيستم","professor":"دکتر يمقاني","location":"204","day":"چهارشنبه","time":"13"},
    {"course":"بافت ويژه هوش 1","professor":"دکتر يمقاني","location":"204","day":"چهارشنبه","time":"15:30"},
    {"course":"سيستم هاي توزيع شده","professor":"دکتر مجتهدي","location":"205","day":"چهارشنبه","time":"13"},
    {"course":"تحليل شبکه هاي پيچيده","professor":"دکتر مجتهدي","location":"205","day":"چهارشنبه","time":"15:30"},
    {"course":"نظريه گراف","professor":"دکتر کردرستمي","location":"207","day":"چهارشنبه","time":"7:30"},
    {"course":"زبان تخصصي","professor":"دکتر قديمي","location":"208","day":"چهارشنبه","time":"15:30"},
    {"course":"فن آوري اطلاعات","professor":"دکتر قديمي","location":"208","day":"چهارشنبه","time":"15:30"},
    {"course":"آمار پيش","professor":"دکتر صابري","location":"209","day":"چهارشنبه","time":"7:30"},
    {"course":"رياضي پيش","professor":"دکتر صابري","location":"209","day":"چهارشنبه","time":"10"},
    {"course":"آمار مهندسي","professor":"دکتر پورعليزاده","location":"302","day":"چهارشنبه","time":"7:30"},
    {"course":"رياضي 2","professor":"دکتر پورعليزاده","location":"302","day":"چهارشنبه","time":"10"},
    {"course":"رياضي 1","professor":"دکتر مسروري","location":"302","day":"چهارشنبه","time":"13"},
    {"course":"نظريه زبان و ماشين","professor":"دکتر حدادي","location":"306","day":"چهارشنبه","time":"7:30"},
    {"course":"طراحي زبان","professor":"دکتر حدادي","location":"306","day":"چهارشنبه","time":"10"},
    {"course":"هوش مصنوعي","professor":"دکتر حدادي","location":"306","day":"چهارشنبه","time":"13"},
    {"course":"زبان فارسي پيش","professor":"دکتر خوشه چين","location":"306","day":"چهارشنبه","time":"15:30"},
    {"course":"فارسي","professor":"دکتر داداشي","location":"306","day":"چهارشنبه","time":"15:30"},
    {"course":"آمار مهندسي","professor":"دکتر خجسته","location":"307","day":"چهارشنبه","time":"7:30"},
    {"course":"آمار مهندسي","professor":"دکتر خجسته","location":"307","day":"چهارشنبه","time":"10"},
    {"course":"فيزيک پيش","professor":"دکتر محمدپور","location":"307","day":"چهارشنبه","time":"13"},
    {"course":"فيزيک 1","professor":"دکتر محمدپور","location":"307","day":"چهارشنبه","time":"15:30"},
    {"course":"معادلات ديفرانسيل","professor":"دکتر پارسا","location":"308","day":"چهارشنبه","time":"7:30"},
    {"course":"معادلات ديفرانسيل","professor":"دکتر پارسا","location":"308","day":"چهارشنبه","time":"10"},
    {"course":"مباحث ويژه 1","professor":"دکتر فلاح راد","location":"311","day":"چهارشنبه","time":"13"},
    {"course":"آشنايي با صنعت کامپيوتر","professor":"مهندس زماني","location":"سايت 6","day":"شنبه","time":"7:30"},
    {"course":"آز نرم افزار","professor":"دکتر حدادي","location":"سايت 5","day":"شنبه","time":"13"},
    {"course":"آز فيزيک 2","professor":"دکتر باقري","location":"طبقه2 ساختمان آزمايشگاه ها","day":"شنبه","time":"13"},
    {"course":"کارگاه کامپيوتر","professor":"مهندس زماني","location":"سايت 6","day":"شنبه","time":"15:30"},
    {"course":"آز فيزيک 2","professor":"دکتر باقري","location":"طبقه2 ساختمان آزمايشگاه ها","day":"شنبه","time":"15:30"},
    {"course":"آز فيزيک 2","professor":"دکتر باقري","location":"طبقه2 ساختمان آزمايشگاه ها","day":"شنبه","time":"17:10"},
    {"course":"آز سيستم عامل","professor":"مهندس زماني","location":"سايت 6","day":"يکشنبه","time":"13"},
    {"course":"آز سيستم عامل","professor":"مهندس زماني","location":"سايت 6","day":"يکشنبه","time":"14:30"},
    {"course":"آز مدار و معماري","professor":"دکتر فلاح کاظمي","location":"آزمايشگاه برق","day":"يکشنبه","time":"16"},
    {"course":"آز سيستم عامل","professor":"مهندس زماني","location":"سايت 6","day":"يکشنبه","time":"16"},
    {"course":"آز شبکه کامپيوتري","professor":"دکتر صفرپور","location":"سايت 5","day":"يکشنبه","time":"16"},
    {"course":"آشنايي با صنعت کامپيوتر","professor":"دکتر صفرپور","location":"سايت 5","day":"يکشنبه","time":"17:30"},
    {"course":"کارگاه کامپيوتر","professor":"دکتر حدادي","location":"سايت 5","day":"دوشنبه","time":"10"},
    {"course":"آز فيزيک 2","professor":"دکتر فاضلي","location":"طبقه2 ساختمان آزمايشگاه ها","day":"دوشنبه","time":"13"},
    {"course":"کارگاه کامپيوتر","professor":"دکتر حدادي","location":"سايت 5","day":"دوشنبه","time":"16"},
    {"course":"آز پايگاه داده","professor":"دکتر فلاح راد","location":"سايت 4","day":"دوشنبه","time":"16"},
    {"course":"آز مدار و معماري","professor":"دکتر سروش","location":"آزمايشگاه ميکروپروسسور","day":"دوشنبه","time":"15:30"},
    {"course":"کارگاه کامپيوتر","professor":"دکتر فلاح راد","location":"سايت 5","day":"سه شنبه","time":"13"},
    {"course":"آشنايي با صنعت کامپيوتر","professor":"دکتر آقابابايي","location":"سايت 4","day":"سه شنبه","time":"13"},
    {"course":"آز مدار و معماري","professor":"دکتر سروش","location":"آزمايشگاه ميکروپروسسور","day":"سه شنبه","time":"15:30"},
    {"course":"کارگاه کامپيوتر","professor":"دکتر فلاح راد","location":"سايت 4","day":"سه شنبه","time":"14:40"},
    {"course":"آشنايي با صنعت کامپيوتر","professor":"دکتر آقابابايي","location":"سايت 5","day":"سه شنبه","time":"15"},
    {"course":"کارگاه ساخت ربات","professor":"دکتر خوشحال","location":"سايت 4","day":"چهارشنبه","time":"13"},
    {"course":"آز ريزپردازنده","professor":"دکتر فلاح کاظمي","location":"آزمايشگاه برق","day":"چهارشنبه","time":"13"},
    {"course":"آز ريزپردازنده","professor":"دکتر فلاح کاظمي","location":"آزمايشگاه برق","day":"چهارشنبه","time":"14:40"}
  ];




let classes = [];
let selectedCourse = null;
let selectedProfessor = null;
let currentClass = null;

// انیمیشن‌های اولیه
gsap.to("#hero-title", { y: -20, opacity: 1, duration: 1.5, ease: "power4.out" });
gsap.to("#hero-subtitle", { y: -20, opacity: 1, delay: 0.5, duration: 1.2 });

// رویدادها
document.getElementById("search-input").addEventListener("input", handleSearchInput);
document.getElementById("day-filter").addEventListener("change", filterAndRender);
document.getElementById("time-filter").addEventListener("change", filterAndRender);
document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
document.getElementById("set-reminder").addEventListener("click", setReminder);
document.getElementById("add-to-calendar").addEventListener("click", addToCalendar);
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('navbar_header_side').addEventListener('click', toggleMenu);

// مقداردهی اولیه داده‌ها
function initializeData() {
    classes = classesData.map(cls => ({
        course: cls.course,
        professor: cls.professor,
        location: cls.location,
        day: cls.day,
        time: cls.time,
        code: cls.code || null
    }));
    
    // پر کردن فیلتر روزها
    const dayFilter = document.getElementById("day-filter");
    const days = [...new Set(classes.map(c => c.day))].filter(Boolean);
    days.forEach(day => {
        if (![...dayFilter.options].some(opt => opt.value === day)) {
            dayFilter.add(new Option(day, day));
        }
    });
  
    // پر کردن فیلتر ساعات
    const timeFilter = document.getElementById("time-filter");
    const times = [...new Set(classes.map(c => c.time))].filter(Boolean);
    times.forEach(time => {
        if (![...timeFilter.options].some(opt => opt.value === time)) {
            timeFilter.add(new Option(time, time));
        }
    });
  
    renderCourses();
    updateBreadcrumb();
}

// توابع اصلی
function handleSearchInput() {
    const keyword = document.getElementById("search-input").value.trim().toLowerCase();
    showSuggestions(keyword);
    filterAndRender();
}

function showSuggestions(keyword) {
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";
    
    if (keyword.length < 2) {
        suggestionsDiv.style.display = "none";
        return;
    }

    const suggestions = [
        ...new Set(
            classes
                .filter(cls =>
                    cls.course.toLowerCase().includes(keyword) ||
                    cls.professor.toLowerCase().includes(keyword) ||
                    (cls.code && cls.code.toLowerCase().includes(keyword))
                )
                .flatMap(cls => [cls.course, cls.professor, cls.code])
        )
    ].slice(0, 7);

    if (suggestions.length === 0) {
        suggestionsDiv.style.display = "none";
        return;
    }

    suggestions.forEach(suggestion => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        div.textContent = suggestion;
        div.addEventListener("click", () => {
            document.getElementById("search-input").value = suggestion;
            suggestionsDiv.style.display = "none";
            filterAndRender();
        });
        suggestionsDiv.appendChild(div);
    });

    suggestionsDiv.style.display = "block";
    gsap.from(".suggestion-item", {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out"
    });
}

function filterAndRender() {
    const keyword = document.getElementById("search-input").value.trim().toLowerCase();
    const selectedDay = document.getElementById("day-filter").value;
    const selectedTime = document.getElementById("time-filter").value;
  
    const filtered = classes.filter(cls => {
        const matchesKeyword = 
            cls.course.toLowerCase().includes(keyword) ||
            cls.professor.toLowerCase().includes(keyword) ||
            (cls.code && cls.code.toLowerCase().includes(keyword));
  
        const matchesDay = selectedDay ? cls.day === selectedDay : true;
        const matchesTime = selectedTime ? cls.time === selectedTime : true;
  
        return matchesKeyword && matchesDay && matchesTime;
    });
  
    if (selectedCourse && selectedProfessor) {
        renderClasses(filtered);
    } else if (selectedCourse) {
        renderProfessors(filtered);
    } else {
        renderCourses(filtered);
    }
}

// توابع نمایش
function renderCourses(data = classes) {
    selectedCourse = null;
    selectedProfessor = null;
    const list = document.getElementById("class-list");
    list.innerHTML = "";
  
    const uniqueCourses = [...new Set(data.map(cls => cls.course))].filter(Boolean);
    
    if (uniqueCourses.length === 0) {
        list.innerHTML = `<div class="text-center py-4">هیچ درسی یافت نشد</div>`;
        return;
    }
  
    uniqueCourses.forEach(course => {
        const div = document.createElement("div");
        div.className = "card cursor-pointer hover:bg-white/10 transition-all";
        div.innerHTML = `
            <h3 class="text-lg font-bold flex items-center gap-2 p-4">
                <i class="fas fa-book text-indigo-300"></i>
                ${truncateText(course, 28)}
            </h3>
        `;
        div.addEventListener("click", () => {
            selectedCourse = course;
            filterAndRender();
            updateBreadcrumb();
        });
        list.appendChild(div);
    });
}

function renderProfessors(data = classes) {
    selectedProfessor = null;
    const list = document.getElementById("class-list");
    list.innerHTML = "";
  
    const professors = [...new Set(
        data
            .filter(cls => cls.course === selectedCourse)
            .map(cls => cls.professor)
            .filter(Boolean)
    )];
    
    if (professors.length === 0) {
        list.innerHTML = `<div class="text-center py-4">هیچ استادی یافت نشد</div>`;
        return;
    }
  
    professors.forEach(professor => {
        const div = document.createElement("div");
        div.className = "card cursor-pointer hover:bg-white/10 transition-all";
        div.innerHTML = `
            <h3 class="text-lg font-semibold flex items-center gap-2 p-4">
                <i class="fas fa-chalkboard-teacher text-green-300"></i>
                ${truncateText(professor, 28)}
            </h3>
        `;
        div.addEventListener("click", () => {
            selectedProfessor = professor;
            filterAndRender();
            updateBreadcrumb();
        });
        list.appendChild(div);
    });
}

function renderClasses(data = classes) {
    const list = document.getElementById("class-list");
    list.innerHTML = "";
  
    const filteredClasses = data.filter(cls => 
        cls.course === selectedCourse && 
        cls.professor === selectedProfessor
    );
  
    if (filteredClasses.length === 0) {
        list.innerHTML = `<div class="text-center py-4">هیچ کلاسی یافت نشد</div>`;
        return;
    }
  
    filteredClasses.forEach(cls => {
        const div = document.createElement("div");
        div.className = "card relative bg-white/5 hover:bg-white/10 transition-all";
        div.innerHTML = `
            <button class="reminder-btn absolute top-2 left-2" onclick="openReminderModal(${JSON.stringify(cls).replace(/"/g, '&quot;')})">
                <i class="fas fa-bell text-yellow-400 hover:text-yellow-300"></i>
            </button>
            <div class="p-4">
                <h3 class="text-xl font-bold mb-2">${cls.course}</h3>
                <div class="space-y-2 text-sm">
                    <p><i class="fas fa-user-tie text-green-400"></i> ${cls.professor}</p>
                    <p><i class="fas fa-map-marker-alt text-blue-400"></i> ${cls.location}</p>
                    <p><i class="fas fa-calendar-day text-purple-400"></i> ${cls.day} - ${cls.time}</p>
                    ${cls.code ? `<p><i class="fas fa-hashtag text-orange-400"></i> ${cls.code}</p>` : ''}
                </div>
            </div>
        `;
        list.appendChild(div);
    });
}

// توابع کمکی
function truncateText(text, maxLength) {
    return text?.length > maxLength ? text.slice(0, maxLength - 3) + '...' : text;
}

function updateBreadcrumb() {
  const breadcrumb = document.getElementById("breadcrumb");
  breadcrumb.innerHTML = `
    <span class="breadcrumb-item ${!selectedCourse ? 'active' : ''}" 
          onclick="resetToCourses()">درس‌ها</span>
    ${selectedCourse ? `
      <span class="mx-2">›</span>
      <span class="breadcrumb-item ${!selectedProfessor ? 'active' : ''}" 
            onclick="resetToProfessors()">${truncateText(selectedCourse, 20)}</span>
    ` : ''}
    ${selectedProfessor ? `
      <span class="mx-2">›</span>
      <span class="breadcrumb-item active">${truncateText(selectedProfessor, 20)}</span>
    ` : ''}
  `;
}

function resetToCourses() {
    selectedCourse = null;
    selectedProfessor = null;
    filterAndRender();
    updateBreadcrumb();
}

function resetToProfessors() {
    selectedProfessor = null;
    filterAndRender();
    updateBreadcrumb();
}

function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    menu.classList.toggle("open");
    gsap.to(menu, {
        right: menu.classList.contains("open") ? 0 : -490,
        duration: 0.4,
        ease: "power2.out"
    });
}

// توابع مودال
function openReminderModal(cls) {
    currentClass = cls;
    const modal = document.getElementById("reminder-modal");
    modal.style.display = "flex";
    gsap.fromTo(".modal-content", 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
    );
}

function closeModal() {
    const modal = document.getElementById("reminder-modal");
    gsap.to(".modal-content", {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => modal.style.display = "none"
    });
}

function setReminder() {
    const minutes = parseInt(document.getElementById("reminder-time").value);
    const email = document.getElementById("reminder-email").value.trim();
  
    if (Notification.permission === "granted") {
        scheduleNotification(currentClass, minutes);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") scheduleNotification(currentClass, minutes);
        });
    }
  
    if (email) {
        console.log("ایمیل یادآوری برای:", email);
    }
  
    closeModal();
}

function scheduleNotification(cls, minutesBefore) {
    const [hours, mins] = cls.time.split(":").map(Number);
    const now = new Date();
    const targetTime = new Date(now);
    
    targetTime.setHours(hours, mins - minutesBefore, 0, 0);
    
    const timeout = targetTime - now;
    if (timeout > 0) {
        setTimeout(() => {
            new Notification(`یادآوری کلاس ${cls.course}`, {
                body: `کلاس ${cls.course} با استاد ${cls.professor} تا ${minutesBefore} دقیقه دیگر شروع می‌شود`
            });
        }, timeout);
    }
}

function addToCalendar() {
    // پیاده‌سازی افزودن به تقویم
    alert("این ویژگی در حال توسعه است");
    closeModal();
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    const icon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// بررسی حالت ذخیره شده
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-icon').classList.remove('fa-moon');
    document.getElementById('theme-icon').classList.add('fa-sun');
}

// مقداردهی اولیه
window.addEventListener("load", () => {
    initializeData();
    document.getElementById("loading").classList.add("hidden");
});




function scheduleNotification(cls, minutesBefore) {
  const timeParts = cls.time.split(':');
  const hours = parseInt(timeParts[0]);
  const mins = parseInt(timeParts[1] || 0); // حل مشکل زمان‌های بدون دقیقه
  
  const now = new Date();
  const targetTime = new Date(now);
  
  targetTime.setHours(hours, mins - minutesBefore, 0, 0);
  
  // حل مشکل زمان‌های نامعتبر
  if(isNaN(targetTime.getTime())) {
    console.error('زمان نامعتبر:', cls.time);
    return;
  }
  
  // بقیه کد...
}

// فرض: classesData در دسترس است
function renderClassesTable(data) {
  const table = document.createElement('table');
  table.className = 'classes-table';
  table.innerHTML = `
    <thead>
      <tr>
        <th>درس</th>
        <th>استاد</th>
        <th>کلاس</th>
        <th>روز</th>
        <th>ساعت</th>
      </tr>
    </thead>
    <tbody>
      ${data.map(item => `
        <tr>
          <td>${item.course}</td>
          <td>${item.professor}</td>
          <td>${item.location}</td>
          <td>${item.day}</td>
          <td>${item.time}</td>
        </tr>
      `).join('')}
    </tbody>
  `;
  document.getElementById('classes-list').appendChild(table);
}

// فراخوانی تابع
renderClassesTable(classesData);




const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // تمام بخش‌های مهم را هم حالت شب بدهید
  document.querySelectorAll('.header, .glass, .dropdown-menu, .search-box, .filter-select, .filter-input, .theme-toggle, .modal').forEach(el => {
    el.classList.toggle('dark-mode');
  });
  // تغییر آیکون
  if(document.body.classList.contains('dark-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
});
const menuToggle = document.getElementById('menu-toggle'); // دکمه باز کردن منو
const menuClose = document.getElementById('menu-close');   // دکمه بستن منو
const menu = document.getElementById('menu');              // منو
////////////////////





///////////////////

menuToggle.addEventListener('click', () => {
  menu.classList.add('show');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('show');
});

// بستن منو با کلیک خارج از آن
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.remove('show');
  }
});
