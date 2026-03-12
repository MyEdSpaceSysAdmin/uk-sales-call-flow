import React, { useState, useEffect } from "react";

const USSalesCallFlow = ({ topOffset = 0 }) => {
  const [currentStep, setCurrentStep] = useState("open");
  const [contactId, setContactId] = useState("");
  const [childName, setChildName] = useState("");
  const [grade, setGrade] = useState("");
  const [course, setCourse] = useState("");
  const [siblingName, setSiblingName] = useState("");
  const [siblingGrade, setSiblingGrade] = useState("");
  const [siblingCourse, setSiblingCourse] = useState("");
  const [painPoints, setPainPoints] = useState("");
  const [parentGoal, setParentGoal] = useState("");
  const [priorAttempts, setPriorAttempts] = useState("");
  const [urgencyReason, setUrgencyReason] = useState("");
  const [notes, setNotes] = useState("");
  const [hasSiblings, setHasSiblings] = useState(false);
  const [qualificationStatus, setQualificationStatus] = useState(null);
  const [showQuickRef, setShowQuickRef] = useState(false);
  const [showObjections, setShowObjections] = useState(false);
  const [sidebarTab, setSidebarTab] = useState("info");
  const [copyButtonText, setCopyButtonText] = useState("📋 COPY NOTES");
  const [hubspotButtonText, setHubspotButtonText] = useState("📤 SEND TO HUBSPOT");
  const [isSendingToHubspot, setIsSendingToHubspot] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([
    { id: Date.now(), subject: "Pre-Algebra", subscription: "Monthly", tier: "Essential" },
  ]);
  const [selectedYear, setSelectedYear] = useState("2025/26");
  const [generatedLink, setGeneratedLink] = useState("");
  const [linkButtonText, setLinkButtonText] = useState("COPY LINK");
  const [isShortening, setIsShortening] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({ emoji: "🫵", message: "You got this!" });

  const clearAll = () => {
    setCurrentStep("open");
    setContactId("");
    setChildName("");
    setGrade("");
    setCourse("");
    setSiblingName("");
    setSiblingGrade("");
    setSiblingCourse("");
    setPainPoints("");
    setParentGoal("");
    setPriorAttempts("");
    setUrgencyReason("");
    setNotes("");
    setHasSiblings(false);
    setQualificationStatus(null);
    setShowQuickRef(false);
    setShowObjections(false);
    setSidebarTab("info");
    setSelectedProducts([{ id: Date.now(), subject: "Pre-Algebra", subscription: "Monthly", tier: "Essential" }]);
    setSelectedYear("2025/26");
    setGeneratedLink("");
  };

  const displayName = hasSiblings && siblingName ? `${childName || "[Child]"} and ${siblingName}` : childName || "[Child]";
  const displayCourse = course || "[Course]";
  const displayGrade = grade || "[Grade]";

  const colors = {
    mainBlue: "#3533ff",
    ctaGreen: "#b1db00",
    lightBlue: "#a3e1f0",
    darkBlue: "#101626",
    white: "#ffffff",
    warning: "#ff3333",
    lightGray: "#f8f9fa",
    midGray: "#e9ecef",
  };

  const stepOrder = ["open", "clarify", "zombies", "label", "pain", "sell", "close", "confirm"];
  const currentIndex = stepOrder.indexOf(currentStep);

  useEffect(() => {
    if (course && selectedProducts.length > 0) {
      const subjectMap = { "Pre-Algebra": "Pre-Algebra", "Algebra 1": "Algebra I", "Algebra 2": "Algebra II", Geometry: "Geometry" };
      if (subjectMap[course]) {
        setSelectedProducts((prev) => [{ ...prev[0], subject: subjectMap[course] }, ...prev.slice(1)]);
      }
    }
  }, [course]);

  const motivations = [
    { emoji: "🫵", message: "You got this!" },
    { emoji: "💰", message: "Go get that sale!" },
    { emoji: "🚀", message: "Send it!" },
    { emoji: "💪", message: "Close that deal!" },
    { emoji: "🔥", message: "Let's go!" },
    { emoji: "⭐", message: "Star seller!" },
    { emoji: "🎯", message: "Lock it in!" },
  ];

  const launchConfetti = () => { setShowConfetti(true); setTimeout(() => setShowConfetti(false), 3000); };
  const launchToast = () => {
    setToastContent(motivations[Math.floor(Math.random() * motivations.length)]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1800);
  };

  const products = [
    { year: "2025/26", subject: "Pre-Algebra", subscription: "Monthly", tier: "Essential", variantId: "51176248082719", sellingPlanId: "6732382495" },
    { year: "2025/26", subject: "Pre-Algebra", subscription: "Installments", tier: "Essential", variantId: "51220289356063", sellingPlanId: "6732415263" },
    { year: "2025/26", subject: "Pre-Algebra", subscription: "Annual", tier: "Essential", variantId: "51176248115487", sellingPlanId: "6734086431" },
    { year: "2025/26", subject: "Pre-Algebra", subscription: "Monthly", tier: "Premium", variantId: "51507453919519", sellingPlanId: "6732382495" },
    { year: "2025/26", subject: "Pre-Algebra", subscription: "Installments", tier: "Premium", variantId: "51507453985055", sellingPlanId: "6732415263" },
    { year: "2025/26", subject: "Pre-Algebra", subscription: "Annual", tier: "Premium", variantId: "51507453952287", sellingPlanId: "6734086431" },
    { year: "2025/26", subject: "Algebra I", subscription: "Monthly", tier: "Essential", variantId: "51167592284447", sellingPlanId: "6732382495" },
    { year: "2025/26", subject: "Algebra I", subscription: "Installments", tier: "Essential", variantId: "51220294795551", sellingPlanId: "6732415263" },
    { year: "2025/26", subject: "Algebra I", subscription: "Annual", tier: "Essential", variantId: "51167592317215", sellingPlanId: "6734086431" },
    { year: "2025/26", subject: "Algebra I", subscription: "Monthly", tier: "Premium", variantId: "51507455721759", sellingPlanId: "6732382495" },
    { year: "2025/26", subject: "Algebra I", subscription: "Installments", tier: "Premium", variantId: "51507455787295", sellingPlanId: "6732415263" },
    { year: "2025/26", subject: "Algebra I", subscription: "Annual", tier: "Premium", variantId: "51507455754527", sellingPlanId: "6734086431" },
    { year: "2025/26", subject: "Geometry", subscription: "Monthly", tier: "Essential", variantId: "51167595921695", sellingPlanId: "6732382495" },
    { year: "2025/26", subject: "Geometry", subscription: "Installments", tier: "Essential", variantId: "51220291649823", sellingPlanId: "6732415263" },
    { year: "2025/26", subject: "Geometry", subscription: "Annual", tier: "Essential", variantId: "51167595954463", sellingPlanId: "6734086431" },
    { year: "2025/26", subject: "Geometry", subscription: "Monthly", tier: "Premium", variantId: "51507455164703", sellingPlanId: "6732382495" },
    { year: "2025/26", subject: "Geometry", subscription: "Installments", tier: "Premium", variantId: "51507455230239", sellingPlanId: "6732415263" },
    { year: "2025/26", subject: "Geometry", subscription: "Annual", tier: "Premium", variantId: "51507455197471", sellingPlanId: "6734086431" },
    { year: "2025/26", subject: "Algebra II", subscription: "Monthly", tier: "Essential", variantId: "51198955192607", sellingPlanId: "6732382495" },
    { year: "2025/26", subject: "Algebra II", subscription: "Installments", tier: "Essential", variantId: "51220287291679", sellingPlanId: "6732415263" },
    { year: "2025/26", subject: "Algebra II", subscription: "Annual", tier: "Essential", variantId: "51198955225375", sellingPlanId: "6734086431" },
    { year: "2025/26", subject: "Algebra II", subscription: "Monthly", tier: "Premium", variantId: "51507454443807", sellingPlanId: "6732382495" },
    { year: "2025/26", subject: "Algebra II", subscription: "Installments", tier: "Premium", variantId: "51507454509343", sellingPlanId: "6732415263" },
    { year: "2025/26", subject: "Algebra II", subscription: "Annual", tier: "Premium", variantId: "51507454476575", sellingPlanId: "6734086431" },
    { year: "2026/27", subject: "Pre-Algebra", subscription: "Monthly", tier: "Essential", variantId: "51585228243231", sellingPlanId: "6732382495" },
    { year: "2026/27", subject: "Pre-Algebra", subscription: "Annual", tier: "Essential", variantId: "51585228275999", sellingPlanId: "6734086431" },
    { year: "2026/27", subject: "Pre-Algebra", subscription: "Installments", tier: "Essential", variantId: "51585228308767", sellingPlanId: "6732415263" },
    { year: "2026/27", subject: "Pre-Algebra", subscription: "Monthly", tier: "Premium", variantId: "51585228341535", sellingPlanId: "6732382495" },
    { year: "2026/27", subject: "Pre-Algebra", subscription: "Annual", tier: "Premium", variantId: "51585228374303", sellingPlanId: "6734086431" },
    { year: "2026/27", subject: "Pre-Algebra", subscription: "Installments", tier: "Premium", variantId: "51585228407071", sellingPlanId: "6732415263" },
    { year: "2026/27", subject: "Algebra I", subscription: "Monthly", tier: "Essential", variantId: "51585229226271", sellingPlanId: "6732382495" },
    { year: "2026/27", subject: "Algebra I", subscription: "Annual", tier: "Essential", variantId: "51585229259039", sellingPlanId: "6734086431" },
    { year: "2026/27", subject: "Algebra I", subscription: "Installments", tier: "Essential", variantId: "51585229291807", sellingPlanId: "6732415263" },
    { year: "2026/27", subject: "Algebra I", subscription: "Monthly", tier: "Premium", variantId: "51585229324575", sellingPlanId: "6732382495" },
    { year: "2026/27", subject: "Algebra I", subscription: "Annual", tier: "Premium", variantId: "51585229357343", sellingPlanId: "6734086431" },
    { year: "2026/27", subject: "Algebra I", subscription: "Installments", tier: "Premium", variantId: "51585229390111", sellingPlanId: "6732415263" },
    { year: "2026/27", subject: "Geometry", subscription: "Monthly", tier: "Essential", variantId: "51585228964127", sellingPlanId: "6732382495" },
    { year: "2026/27", subject: "Geometry", subscription: "Annual", tier: "Essential", variantId: "51585228996895", sellingPlanId: "6734086431" },
    { year: "2026/27", subject: "Geometry", subscription: "Installments", tier: "Essential", variantId: "51585229029663", sellingPlanId: "6732415263" },
    { year: "2026/27", subject: "Geometry", subscription: "Monthly", tier: "Premium", variantId: "51585229062431", sellingPlanId: "6732382495" },
    { year: "2026/27", subject: "Geometry", subscription: "Annual", tier: "Premium", variantId: "51585229095199", sellingPlanId: "6734086431" },
    { year: "2026/27", subject: "Geometry", subscription: "Installments", tier: "Premium", variantId: "51585229127967", sellingPlanId: "6732415263" },
    { year: "2026/27", subject: "Algebra II", subscription: "Monthly", tier: "Essential", variantId: "51583812141343", sellingPlanId: "6732382495" },
    { year: "2026/27", subject: "Algebra II", subscription: "Annual", tier: "Essential", variantId: "51583812174111", sellingPlanId: "6734086431" },
    { year: "2026/27", subject: "Algebra II", subscription: "Installments", tier: "Essential", variantId: "51583812206879", sellingPlanId: "6732415263" },
    { year: "2026/27", subject: "Algebra II", subscription: "Monthly", tier: "Premium", variantId: "51583812239647", sellingPlanId: "6732382495" },
    { year: "2026/27", subject: "Algebra II", subscription: "Annual", tier: "Premium", variantId: "51583812272415", sellingPlanId: "6734086431" },
    { year: "2026/27", subject: "Algebra II", subscription: "Installments", tier: "Premium", variantId: "51583812305183", sellingPlanId: "6732415263" },
    { year: null, subject: "Pre-Algebra", subscription: "7 Day Trial", tier: null, variantId: "51346694635807", sellingPlanId: null },
    { year: null, subject: "Algebra I", subscription: "7 Day Trial", tier: null, variantId: "51346694668575", sellingPlanId: null },
    { year: null, subject: "Geometry", subscription: "7 Day Trial", tier: null, variantId: "51346694701343", sellingPlanId: null },
    { year: null, subject: "Algebra II", subscription: "7 Day Trial", tier: null, variantId: "51346694734111", sellingPlanId: null },
    { year: null, subject: "AI Math Coach", subscription: "Monthly", tier: null, variantId: "51507475611935", sellingPlanId: "6732382495" },
    { year: null, subject: "AI Math Coach", subscription: "Annual", tier: null, variantId: "51507475644703", sellingPlanId: "6734086431" },
  ];

  const subjects = [...new Set(products.map((p) => p.subject))];
  const subscriptions = ["Monthly", "Annual", "7 Day Trial"];
  const tiers = ["Essential", "Premium"];
  const years = ["2025/26", "2026/27"];

  const getNotesText = () => {
    const siblingInfo = hasSiblings
      ? `${siblingName || "Yes"}${siblingGrade ? " - " + siblingGrade : ""}${siblingCourse ? " - " + siblingCourse : ""}`
      : "No";
    return `CALL NOTES\n===========\nContact ID: ${contactId || "Not entered"}\nChild: ${childName || "Not entered"}\nGrade: ${grade || "Not entered"}\nCourse: ${course || "Not entered"}\nSibling: ${siblingInfo}\n\nDISCOVERY\nPain Points: ${painPoints || "Not entered"}\nParent Goal: ${parentGoal || "Not entered"}\nUrgency: ${urgencyReason || "Not entered"}\nPrior Attempts: ${priorAttempts || "Not entered"}\n\nADDITIONAL NOTES\n${notes || "None"}`;
  };

  const copyCallNotes = () => {
    const notesText = getNotesText();
    const textArea = document.createElement("textarea");
    textArea.value = notesText;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    try { document.execCommand("copy"); setCopyButtonText("✓ COPIED!"); }
    catch { setCopyButtonText("❌ FAILED"); }
    setTimeout(() => setCopyButtonText("📋 COPY NOTES"), 2000);
    document.body.removeChild(textArea);
  };

  const sendToHubspot = async () => {
    if (!contactId) return;
    setIsSendingToHubspot(true);
    setHubspotButtonText("SENDING...");
    try {
      const response = await fetch("https://n8n.myedspace.co.uk/webhook/8cb43b74-eba9-4c99-b894-99ad1f3c8626", {
        method: "POST", mode: "cors",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ contact_id: contactId, notes: getNotesText() }),
      });
      if (response.ok) { setHubspotButtonText("✓ SENT!"); }
      else { console.error("Webhook error:", response.status, response.statusText); setHubspotButtonText("❌ FAILED"); }
    } catch (err) { console.error("Webhook fetch error:", err); setHubspotButtonText("❌ FAILED"); }
    setIsSendingToHubspot(false);
    setTimeout(() => setHubspotButtonText("📤 SEND TO HUBSPOT"), 2000);
  };

  const handleCourseChange = (value) => {
    setCourse(value);
    if (["Pre-Algebra", "Algebra 1", "Geometry", "Algebra 2"].includes(value)) setQualificationStatus("qualified");
    else if (value === "Below Pre-Algebra") setQualificationStatus("ai-coach");
    else if (value === "Above Algebra 2") setQualificationStatus("no-product");
    else setQualificationStatus(null);
  };

  const addProduct = () => {
    const subjectMap = { "Pre-Algebra": "Pre-Algebra", "Algebra 1": "Algebra I", "Algebra 2": "Algebra II", Geometry: "Geometry" };
    setSelectedProducts([...selectedProducts, { id: Date.now(), subject: subjectMap[course] || "Pre-Algebra", subscription: "Monthly", tier: "Essential" }]);
  };
  const removeProduct = (id) => {
    if (selectedProducts.length > 1) { setSelectedProducts(selectedProducts.filter((p) => p.id !== id)); setGeneratedLink(""); }
  };
  const updateProduct = (id, field, value) => {
    setSelectedProducts(selectedProducts.map((p) => {
      if (p.id !== id) return p;
      const updated = { ...p, [field]: value };
      if (field === "subject" && value === "AI Math Coach") {
        updated.tier = null;
        if (!["Monthly", "Annual"].includes(updated.subscription)) updated.subscription = "Monthly";
      } else if (field === "subject" && updated.tier === null && updated.subscription !== "7 Day Trial") updated.tier = "Essential";
      if (field === "subscription" && value === "7 Day Trial") updated.tier = null;
      else if (field === "subscription" && updated.tier === null && updated.subject !== "AI Math Coach") updated.tier = "Essential";
      return updated;
    }));
    setGeneratedLink("");
  };
  const getProductData = (sel) => {
    if (sel.subscription === "7 Day Trial") return products.find((p) => p.subject === sel.subject && p.subscription === "7 Day Trial" && p.year === null);
    if (sel.subject === "AI Math Coach") return products.find((p) => p.subject === "AI Math Coach" && p.subscription === sel.subscription && p.year === null);
    return products.find((p) => p.year === selectedYear && p.subject === sel.subject && p.subscription === sel.subscription && p.tier === sel.tier);
  };
  const generateLink = () => {
    if (!selectedProducts.length) return "";
    const params = selectedProducts.map((s) => {
      const p = getProductData(s);
      if (!p) return "";
      return p.sellingPlanId ? `items[][id]=${p.variantId}&items[][quantity]=1&items[][selling_plan]=${p.sellingPlanId}` : `items[][id]=${p.variantId}&items[][quantity]=1`;
    }).filter(Boolean).join("&");
    const checkoutUrl = contactId ? `/checkout?hs_contact_id=${encodeURIComponent(contactId)}` : "/checkout";
    return `https://myedspace.com/cart/clear?return_to=${encodeURIComponent("/cart/add?" + params + "&return_to=" + checkoutUrl)}`;
  };
  const copyLink = async () => {
    const link = generateLink();
    if (!link) return;
    setIsShortening(true);
    setLinkButtonText("SHORTENING...");
    let finalUrl = link;
    try {
      const res = await fetch("https://pay.myedspace.com/create", {
        method: "POST", mode: "cors",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ url: link }),
      });
      if (res.ok) { const data = await res.json(); finalUrl = data.shortUrl || link; }
      else { console.error("Shortener error:", res.status, res.statusText); }
    } catch (err) { console.error("Shortener fetch error:", err); }
    const ta = document.createElement("textarea");
    ta.value = finalUrl; ta.style.position = "fixed"; ta.style.left = "-9999px";
    document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
    setGeneratedLink(finalUrl);
    setLinkButtonText("✓ COPIED!");
    launchConfetti(); launchToast();
    setIsShortening(false);
    setTimeout(() => setLinkButtonText("COPY LINK"), 2000);
  };

  const objections = [
    { trigger: "Too expensive", response: "Eddie's private rate was $800/month. We're $149 for Eddie + workbooks + practice + video solutions + AI Coach. Plus 30-day guarantee." },
    { trigger: "Need to talk to spouse", response: "No problem. We have a 30-day money-back guarantee, so they can see it in action. If either of you isn't happy, full refund." },
    { trigger: "Need to think about it", response: "What's your main concern? What are you afraid of having happen?" },
    { trigger: "My kid won't engage", response: "Most kids who resist have had bad tutoring experiences. Eddie's different - 20-30 messages per lesson. 30-day guarantee to test." },
    { trigger: "Times don't work", response: "Every lesson is recorded instantly. A lot of families do a mix of live + recordings. Works great." },
    { trigger: "I want 1-on-1", response: "Random tutors help tonight but don't build understanding. Eddie + AI Coach gives consistent methodology 24/7. Try monthly with 30-day guarantee." },
    { trigger: "Already using Mathnasium", response: "Mathnasium is $200-400/mo, rotating tutors, you drive there. Same elite teacher every time, from home, $149." },
    { trigger: "Using IXL/Khan Academy", response: "IXL is like a gym membership with no trainer. No one explaining WHY. Eddie explains the why. AI Coach for homework help." },
    { trigger: "Can we start later?", response: "Math builds on itself. Waiting = bigger gaps to fill. 30-day guarantee means no risk starting now." },
    { trigger: "What if they fall behind?", response: "Every lesson recorded. Practice problems + video solutions. AI Coach 24/7. They literally can't fall behind." },
  ];

  const boxStyle = (variant) => {
    const bgColor = variant === "rep" ? colors.lightBlue : variant === "warning" ? "#ffdddd" : variant === "tip" ? colors.ctaGreen : "#f5f5f5";
    const borderColor = variant === "rep" ? colors.mainBlue : variant === "warning" ? colors.warning : variant === "tip" ? "#8fb300" : colors.darkBlue;
    return { background: bgColor, borderLeft: `4px solid ${borderColor}`, padding: "16px", marginBottom: "12px", fontFamily: "Inter, sans-serif" };
  };
  const labelStyle = { fontWeight: "700", color: colors.mainBlue, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px", display: "block", marginBottom: "4px" };
  const scriptStyle = { fontStyle: "italic", color: colors.darkBlue, margin: 0, fontSize: "15px", lineHeight: "1.5" };
  const sidebarInputStyle = { width: "100%", padding: "8px 10px", border: `1px solid ${colors.midGray}`, borderRadius: 0, fontFamily: "Inter", fontSize: "13px", boxSizing: "border-box", background: colors.white, color: colors.darkBlue, marginBottom: "8px" };
  const sidebarSelectStyle = { ...sidebarInputStyle, cursor: "pointer", appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23101626' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center" };
  const sidebarLabelStyle = { display: "block", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px", color: "rgba(255,255,255,0.6)" };

  const confettiPieces = showConfetti
    ? Array.from({ length: 150 }, (_, i) => ({
        id: i, left: Math.random() * 100, top: Math.random() * 100, size: 10 + Math.random() * 15,
        color: [colors.ctaGreen, colors.mainBlue, colors.white, colors.lightBlue][Math.floor(Math.random() * 4)],
        rotation: Math.random() * 360, duration: 1200 + Math.random() * 1500,
      }))
    : [];

  return (
    <div style={{ minHeight: "100vh", background: colors.white, fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif", color: colors.darkBlue, display: "flex" }}>
      {showConfetti && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 9999 }}>
          {confettiPieces.map((p) => (
            <div key={p.id} style={{ position: "absolute", left: `${p.left}vw`, top: `${p.top}vh`, width: p.size, height: p.size, background: p.color, transform: `rotate(${p.rotation}deg)`, animation: `confetti-fall ${p.duration}ms ease-out forwards` }} />
          ))}
        </div>
      )}
      {showToast && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: colors.darkBlue, border: `3px solid ${colors.ctaGreen}`, padding: "40px 60px", textAlign: "center", zIndex: 10000 }}>
          <span style={{ fontSize: "64px", display: "block", marginBottom: "16px" }}>{toastContent.emoji}</span>
          <span style={{ color: colors.white, fontSize: "24px", fontWeight: "800", textTransform: "uppercase" }}>{toastContent.message}</span>
        </div>
      )}
      <style>{`@keyframes confetti-fall { 0% { opacity: 1; transform: translateY(0) rotate(0); } 100% { opacity: 0; transform: translateY(400px) rotate(720deg); } }
        .us-sidebar-content::-webkit-scrollbar { display: none; }`}</style>

      {/* Sidebar */}
      <div style={{ width: "280px", minWidth: "280px", background: colors.darkBlue, display: "flex", flexDirection: "column", height: `calc(100vh - ${topOffset}px)`, position: "sticky", top: topOffset }}>
        <div style={{ padding: "16px", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ margin: 0, fontSize: "16px", fontWeight: "800", color: colors.white }}>MyEdSpace <span style={{ color: colors.lightBlue }}>Sales</span></h1>
          <button onClick={clearAll} style={{ padding: "6px 10px", background: "transparent", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", fontFamily: "Inter", fontWeight: "600", fontSize: "10px" }}>↻ CLEAR</button>
        </div>
        <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <button onClick={() => setSidebarTab("info")} style={{ flex: 1, padding: "12px", background: sidebarTab === "info" ? "rgba(53,51,255,0.2)" : "transparent", color: sidebarTab === "info" ? colors.white : "rgba(255,255,255,0.5)", border: "none", cursor: "pointer", fontFamily: "Inter", fontWeight: "600", fontSize: "11px", borderBottom: sidebarTab === "info" ? `2px solid ${colors.mainBlue}` : "2px solid transparent" }}>CALL INFO</button>
          <button onClick={() => setSidebarTab("link")} style={{ flex: 1, padding: "12px", background: sidebarTab === "link" ? "rgba(53,51,255,0.2)" : "transparent", color: sidebarTab === "link" ? colors.white : "rgba(255,255,255,0.5)", border: "none", cursor: "pointer", fontFamily: "Inter", fontWeight: "600", fontSize: "11px", borderBottom: sidebarTab === "link" ? `2px solid ${colors.mainBlue}` : "2px solid transparent" }}>PAY LINK</button>
        </div>
        <div className="us-sidebar-content" style={{ flex: 1, overflow: "auto", padding: "16px", scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {sidebarTab === "info" ? (
            <>
              <p style={{ fontSize: "10px", fontWeight: "700", color: colors.lightBlue, marginBottom: "10px", letterSpacing: "1px" }}>HUBSPOT</p>
              <label style={sidebarLabelStyle}>Contact ID</label>
              <input type="text" value={contactId} onChange={(e) => setContactId(e.target.value)} placeholder="Enter HubSpot Contact ID..." style={{ ...sidebarInputStyle, marginBottom: "16px", border: contactId ? `1px solid ${colors.ctaGreen}` : `1px solid ${colors.midGray}` }} />
              <p style={{ fontSize: "10px", fontWeight: "700", color: colors.lightBlue, marginBottom: "10px", letterSpacing: "1px" }}>STUDENT</p>
              <label style={sidebarLabelStyle}>Name</label>
              <input type="text" value={childName} onChange={(e) => setChildName(e.target.value)} placeholder="Child's name..." style={sidebarInputStyle} />
              <label style={sidebarLabelStyle}>Grade</label>
              <select value={grade} onChange={(e) => setGrade(e.target.value)} style={sidebarSelectStyle}>
                <option value="">Select...</option>
                {["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th"].map((g) => (<option key={g} value={g}>{g} Grade</option>))}
                <option value="Other">Other</option>
              </select>
              <label style={sidebarLabelStyle}>Course</label>
              <select value={course} onChange={(e) => handleCourseChange(e.target.value)} style={sidebarSelectStyle}>
                <option value="">Select...</option>
                <option value="Pre-Algebra">Pre-Algebra</option>
                <option value="Algebra 1">Algebra 1</option>
                <option value="Geometry">Geometry</option>
                <option value="Algebra 2">Algebra 2</option>
                <option value="Below Pre-Algebra">Below Pre-Algebra</option>
                <option value="Above Algebra 2">Above Algebra 2</option>
              </select>
              <button onClick={() => setHasSiblings(!hasSiblings)} style={{ width: "100%", padding: "8px", background: hasSiblings ? colors.ctaGreen : "transparent", color: hasSiblings ? colors.darkBlue : "rgba(255,255,255,0.6)", border: `1px solid ${hasSiblings ? colors.ctaGreen : "rgba(255,255,255,0.2)"}`, cursor: "pointer", fontFamily: "Inter", fontWeight: "600", fontSize: "10px", marginBottom: "12px" }}>{hasSiblings ? "✓ SIBLING ADDED" : "+ ADD SIBLING"}</button>
              {hasSiblings && (
                <div style={{ padding: "10px", background: "rgba(177,219,0,0.1)", border: "1px solid rgba(177,219,0,0.3)", marginBottom: "12px" }}>
                  <input type="text" value={siblingName} onChange={(e) => setSiblingName(e.target.value)} placeholder="Sibling name..." style={sidebarInputStyle} />
                  <select value={siblingGrade} onChange={(e) => setSiblingGrade(e.target.value)} style={sidebarSelectStyle}>
                    <option value="">Grade...</option>
                    {["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th"].map((g) => (<option key={g} value={g}>{g} Grade</option>))}
                  </select>
                  <select value={siblingCourse} onChange={(e) => setSiblingCourse(e.target.value)} style={{ ...sidebarSelectStyle, marginBottom: 0 }}>
                    <option value="">Course...</option>
                    <option value="Pre-Algebra">Pre-Algebra</option>
                    <option value="Algebra 1">Algebra 1</option>
                    <option value="Geometry">Geometry</option>
                    <option value="Algebra 2">Algebra 2</option>
                  </select>
                  <p style={{ margin: "6px 0 0", fontSize: "10px", color: colors.ctaGreen }}>20% sibling discount ($119)</p>
                </div>
              )}
              <p style={{ fontSize: "10px", fontWeight: "700", color: colors.lightBlue, marginBottom: "10px", marginTop: "16px", letterSpacing: "1px" }}>DISCOVERY</p>
              <label style={sidebarLabelStyle}>Pain Points</label>
              <input type="text" value={painPoints} onChange={(e) => setPainPoints(e.target.value)} placeholder="Use their exact words..." style={sidebarInputStyle} />
              <label style={sidebarLabelStyle}>Goal</label>
              <input type="text" value={parentGoal} onChange={(e) => setParentGoal(e.target.value)} placeholder="What success looks like..." style={sidebarInputStyle} />
              <label style={sidebarLabelStyle}>Urgency</label>
              <input type="text" value={urgencyReason} onChange={(e) => setUrgencyReason(e.target.value)} placeholder="Why now..." style={sidebarInputStyle} />
              <label style={sidebarLabelStyle}>Prior Attempts</label>
              <input type="text" value={priorAttempts} onChange={(e) => setPriorAttempts(e.target.value)} placeholder="What they've tried..." style={sidebarInputStyle} />
              <p style={{ fontSize: "10px", fontWeight: "700", color: colors.lightBlue, marginBottom: "10px", marginTop: "16px", letterSpacing: "1px" }}>NOTES</p>
              <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Additional notes..." style={{ ...sidebarInputStyle, marginBottom: 0 }} />
            </>
          ) : (
            <>
              <p style={{ fontSize: "10px", fontWeight: "700", color: colors.lightBlue, marginBottom: "12px", letterSpacing: "1px" }}>SCHOOL YEAR</p>
              <select value={selectedYear} onChange={(e) => { setSelectedYear(e.target.value); setGeneratedLink(""); }} style={{ ...sidebarSelectStyle, marginBottom: "16px", border: `1px solid ${colors.ctaGreen}` }}>
                {years.map((y) => (<option key={y} value={y}>{y}</option>))}
              </select>
              <p style={{ fontSize: "10px", fontWeight: "700", color: colors.lightBlue, marginBottom: "12px", letterSpacing: "1px" }}>CHECKOUT LINK</p>
              {selectedProducts.map((p, idx) => {
                const hideTier = p.subscription === "7 Day Trial" || p.subject === "AI Math Coach";
                const availableSubs = p.subject === "AI Math Coach" ? ["Monthly", "Annual"] : subscriptions;
                return (
                  <div key={p.id} style={{ background: colors.white, padding: "12px", marginBottom: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ fontSize: "10px", color: "#666", fontWeight: "700" }}>PRODUCT {idx + 1}</span>
                      {selectedProducts.length > 1 && (<button onClick={() => removeProduct(p.id)} style={{ background: "transparent", color: colors.warning, border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "700" }}>×</button>)}
                    </div>
                    <select value={p.subject} onChange={(e) => updateProduct(p.id, "subject", e.target.value)} style={{ ...sidebarSelectStyle, marginBottom: "6px" }}>
                      {subjects.map((s) => (<option key={s} value={s}>{s}</option>))}
                    </select>
                    <select value={p.subscription} onChange={(e) => updateProduct(p.id, "subscription", e.target.value)} style={{ ...sidebarSelectStyle, marginBottom: hideTier ? 0 : "6px" }}>
                      {availableSubs.map((s) => (<option key={s} value={s}>{s}</option>))}
                    </select>
                    {!hideTier && (
                      <select value={p.tier || "Essential"} onChange={(e) => updateProduct(p.id, "tier", e.target.value)} style={{ ...sidebarSelectStyle, marginBottom: 0 }}>
                        {tiers.map((t) => (<option key={t} value={t}>{t}</option>))}
                      </select>
                    )}
                  </div>
                );
              })}
              <button onClick={addProduct} style={{ width: "100%", padding: "10px", background: "transparent", color: colors.white, border: "1px dashed rgba(255,255,255,0.3)", cursor: "pointer", fontFamily: "Inter", fontWeight: "600", fontSize: "12px", marginBottom: "16px" }}>+ ADD PRODUCT</button>
              {selectedProducts.length > 0 && (
                <>
                  <div style={{ background: "rgba(0,0,0,0.3)", padding: "10px", marginBottom: "10px", fontSize: "9px", color: colors.ctaGreen, fontFamily: "monospace", wordBreak: "break-all", maxHeight: "50px", overflow: "auto" }}>{generatedLink || generateLink()}</div>
                  <button onClick={copyLink} disabled={isShortening} style={{ width: "100%", padding: "14px", background: linkButtonText === "✓ COPIED!" ? colors.white : colors.ctaGreen, color: colors.darkBlue, border: "none", cursor: isShortening ? "wait" : "pointer", fontFamily: "Inter", fontWeight: "800", fontSize: "13px" }}>{linkButtonText}</button>
                </>
              )}
            </>
          )}
        </div>
        {sidebarTab === "info" && (
          <div style={{ padding: "12px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: "8px" }}>
            <button onClick={copyCallNotes} style={{ flex: 1, padding: "12px", background: copyButtonText === "✓ COPIED!" ? colors.white : colors.ctaGreen, color: colors.darkBlue, border: "none", cursor: "pointer", fontFamily: "Inter", fontWeight: "700", fontSize: "11px" }}>{copyButtonText}</button>
            <button onClick={sendToHubspot} disabled={!contactId || isSendingToHubspot} style={{ flex: 1, padding: "12px", background: hubspotButtonText === "✓ SENT!" ? colors.ctaGreen : hubspotButtonText === "❌ FAILED" ? colors.warning : !contactId ? "#555" : colors.mainBlue, color: hubspotButtonText === "✓ SENT!" ? colors.darkBlue : colors.white, border: "none", cursor: !contactId || isSendingToHubspot ? "not-allowed" : "pointer", fontFamily: "Inter", fontWeight: "700", fontSize: "11px", opacity: !contactId ? 0.6 : 1 }}>{hubspotButtonText}</button>
          </div>
        )}
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Header */}
        <div style={{ background: colors.mainBlue, padding: "14px 20px", position: "sticky", top: topOffset, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "14px", color: colors.white }}>
            {childName ? (<><strong>{childName}</strong>{grade && ` · ${grade}`}{course && ` · ${course}`}</>) : (<span style={{ opacity: 0.8 }}>← Enter student info in sidebar</span>)}
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={() => setShowQuickRef(!showQuickRef)} style={{ padding: "8px 14px", background: showQuickRef ? colors.white : "rgba(255,255,255,0.15)", color: showQuickRef ? colors.mainBlue : colors.white, border: "none", cursor: "pointer", fontFamily: "Inter", fontWeight: "700", fontSize: "11px" }}>QUICK REF</button>
            <button onClick={() => setShowObjections(!showObjections)} style={{ padding: "8px 14px", background: showObjections ? colors.warning : "rgba(255,255,255,0.15)", color: colors.white, border: "none", cursor: "pointer", fontFamily: "Inter", fontWeight: "700", fontSize: "11px" }}>OBJECTIONS</button>
          </div>
        </div>

        {/* Quick Ref */}
        {showQuickRef && (
          <div style={{ background: colors.lightGray, padding: "16px 20px", borderBottom: `1px solid ${colors.midGray}` }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", fontSize: "12px" }}>
              <div>
                <p style={{ fontWeight: "700", margin: "0 0 8px", color: colors.darkBlue }}>PRICING</p>
                <p style={{ margin: "3px 0", color: "#666" }}>Monthly: <strong>$149</strong></p>
                <p style={{ margin: "3px 0", color: "#666" }}>Annual Essential: <strong>$369</strong></p>
                <p style={{ margin: "3px 0", color: "#666" }}>Annual Premium: <strong>$399</strong></p>
                <p style={{ margin: "3px 0", color: "#666" }}>Trial: <strong>$7/week</strong></p>
                <p style={{ margin: "3px 0", color: "#666" }}>Sibling: <strong>20% off</strong></p>
                <p style={{ margin: "3px 0", color: "#666" }}>AI Coach: <strong>$14/mo</strong></p>
              </div>
              <div>
                <p style={{ fontWeight: "700", margin: "0 0 8px", color: colors.darkBlue }}>SCHEDULE</p>
                <p style={{ margin: "3px 0", color: "#666" }}>Pre-Alg: Mon/Wed 5pm PT</p>
                <p style={{ margin: "3px 0", color: "#666" }}>Alg 1: Tue/Thu 5pm PT</p>
                <p style={{ margin: "3px 0", color: "#666" }}>Geom: Mon/Wed 6pm PT</p>
                <p style={{ margin: "3px 0", color: "#666" }}>Alg 2: Tue/Thu 6pm PT</p>
              </div>
              <div>
                <p style={{ fontWeight: "700", margin: "0 0 8px", color: colors.darkBlue }}>EDDIE</p>
                <p style={{ margin: "3px 0", color: "#666" }}>UCLA Pure Math</p>
                <p style={{ margin: "3px 0", color: "#666" }}>Perfect SAT (800)</p>
                <p style={{ margin: "3px 0", color: "#666" }}>9+ years teaching</p>
                <p style={{ margin: "3px 0", color: "#666" }}>21,000+ students</p>
              </div>
              <div>
                <p style={{ fontWeight: "700", margin: "0 0 8px", color: colors.darkBlue }}>ANCHOR</p>
                <p style={{ margin: "3px 0", color: "#666" }}>Eddie private: $100/hr</p>
                <p style={{ margin: "3px 0", color: "#666" }}>8 lessons = $800/mo</p>
                <p style={{ margin: "3px 0", color: "#666" }}>We're $149 + extras</p>
                <p style={{ margin: "3px 0", color: colors.darkBlue, fontWeight: "700" }}>= 81% savings</p>
              </div>
            </div>
          </div>
        )}

        {/* Objections */}
        {showObjections && (
          <div style={{ background: "#fff5f5", padding: "16px 20px", borderBottom: `1px solid ${colors.warning}` }}>
            <div style={{ background: colors.lightBlue, padding: "12px 14px", marginBottom: "12px", borderLeft: `3px solid ${colors.mainBlue}` }}>
              <p style={{ margin: 0, fontWeight: "700", fontSize: "12px", color: colors.darkBlue }}>AAA FRAMEWORK — Handle every objection with:</p>
              <p style={{ margin: "8px 0 0", fontSize: "13px", color: colors.darkBlue }}><strong>1. AFFIRM</strong> — "I totally understand..." / "That makes sense..."</p>
              <p style={{ margin: "4px 0 0", fontSize: "13px", color: colors.darkBlue }}><strong>2. ASSOCIATE</strong> — "A lot of parents feel the same way..."</p>
              <p style={{ margin: "4px 0 0", fontSize: "13px", color: colors.darkBlue }}><strong>3. ASK</strong> — Ask a question OR provide info that addresses the concern</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", maxHeight: "200px", overflow: "auto" }}>
              {objections.map((obj, i) => (
                <div key={i} style={{ background: colors.white, padding: "10px 12px", border: `1px solid ${colors.midGray}` }}>
                  <p style={{ fontWeight: "700", margin: "0 0 4px", fontSize: "12px", color: colors.warning }}>"{obj.trigger}"</p>
                  <p style={{ margin: 0, fontSize: "11px", color: "#666", lineHeight: "1.4" }}>{obj.response}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Progress */}
        <div style={{ background: colors.white, padding: "10px 20px", borderBottom: `1px solid ${colors.midGray}` }}>
          <div style={{ display: "flex" }}>
            {stepOrder.map((step, i) => (
              <button key={step} onClick={() => setCurrentStep(step)} style={{ flex: 1, padding: "10px 4px", background: currentStep === step ? colors.mainBlue : i < currentIndex ? colors.lightBlue : colors.white, color: currentStep === step ? colors.white : colors.darkBlue, border: `1px solid ${colors.midGray}`, borderRight: i === stepOrder.length - 1 ? `1px solid ${colors.midGray}` : "none", cursor: "pointer", fontFamily: "Inter", fontWeight: "600", fontSize: "10px", textTransform: "uppercase" }}>
                {i + 1}. {step === "confirm" ? "Confirm" : step}
              </button>
            ))}
          </div>
          {(qualificationStatus === "ai-coach" || currentStep === "aicoach") && (
            <button onClick={() => setCurrentStep("aicoach")} style={{ width: "100%", marginTop: "8px", padding: "8px", background: currentStep === "aicoach" ? colors.mainBlue : colors.white, color: currentStep === "aicoach" ? colors.white : colors.mainBlue, border: `1px solid ${colors.mainBlue}`, cursor: "pointer", fontFamily: "Inter", fontWeight: "600", fontSize: "10px", textTransform: "uppercase" }}>
              AI MATH COACH (Grade 5 & Below)
            </button>
          )}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: "20px", overflow: "auto", background: colors.lightGray }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ background: colors.white, border: `1px solid ${colors.midGray}` }}>

              {/* OPEN */}
              {currentStep === "open" && (
                <>
                  <div style={{ background: colors.mainBlue, padding: "16px", borderBottom: `4px solid ${colors.darkBlue}` }}>
                    <h2 style={{ margin: 0, color: colors.white, fontSize: "24px", fontWeight: "800" }}>OPEN</h2>
                    <p style={{ margin: "4px 0 0 0", color: colors.lightBlue, fontSize: "14px" }}>Proof-Promise-Plan (30-60 sec)</p>
                  </div>
                  <div style={{ background: colors.ctaGreen, padding: "12px 16px", borderBottom: `2px solid ${colors.darkBlue}` }}>
                    <p style={{ margin: 0, fontWeight: "700", fontSize: "13px", color: colors.darkBlue }}>🎯 GOAL: Set agenda fast. Control the conversation.</p>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Greeting</span>
                      <p style={scriptStyle}>"Hi [Name], this is [Rep] from MyEdSpace. Thanks for booking time with me."</p>
                      <div style={{ marginTop: "12px" }}>
                        <span style={labelStyle}>Recording</span>
                        <p style={scriptStyle}>"Quick heads up - this call is recorded for training purposes. Is that okay?"</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "13px", color: colors.mainBlue, margin: "8px 0", fontWeight: "600" }}>💡 Wait for "yes" or "sure"</p>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Proof-Promise-Plan</span>
                      <p style={scriptStyle}>"Great. Quick background: we've helped thousands of parents get their kids confident in math. On this call, I want to understand what's going on with your child and where [they're] at, show you how we might help, and see if it makes sense. Should take about 10 minutes. How does that sound?"</p>
                    </div>
                    <div style={boxStyle("tip")}>
                      <p style={{ fontSize: "13px", color: "#228B22", margin: 0, fontWeight: "600" }}>✓ Get a "sounds good" before proceeding</p>
                    </div>
                  </div>
                </>
              )}

              {/* CLARIFY */}
              {currentStep === "clarify" && (
                <>
                  <div style={{ background: colors.mainBlue, padding: "16px", borderBottom: `4px solid ${colors.darkBlue}` }}>
                    <h2 style={{ margin: 0, color: colors.white, fontSize: "24px", fontWeight: "800" }}>CLARIFY</h2>
                    <p style={{ margin: "4px 0 0 0", color: colors.lightBlue, fontSize: "14px" }}>Name, Siblings, Grade/Course (1-2 min)</p>
                  </div>
                  <div style={{ background: colors.ctaGreen, padding: "12px 16px", borderBottom: `2px solid ${colors.darkBlue}` }}>
                    <p style={{ margin: 0, fontWeight: "700", fontSize: "13px", color: colors.darkBlue }}>🎯 GOAL: Get THEM to state the problem. The person asking questions is closing.</p>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Get child's name</span>
                      <p style={scriptStyle}>"And what's your child's name? Who are we helping today?"</p>
                    </div>
                    <p style={{ fontSize: "13px", color: colors.mainBlue, margin: "8px 0", fontWeight: "600" }}>💡 Enter name in sidebar →</p>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Check for siblings</span>
                      <p style={scriptStyle}>"Do you have any other kids at home who might need help with math too?"</p>
                    </div>
                    <p style={{ fontSize: "13px", color: colors.mainBlue, margin: "8px 0", fontWeight: "600" }}>💡 If yes, toggle "Add Sibling" in sidebar. 20% discount!</p>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Course (use their grade from booking)</span>
                      <p style={scriptStyle}>"So {displayName} is in {displayGrade}. Which math course are [they] taking right now - would it be {grade === "6th" || grade === "7th" ? "Pre-Algebra" : grade === "8th" || grade === "9th" ? "Algebra 1" : grade === "10th" ? "Geometry" : grade === "11th" || grade === "12th" ? "Algebra 2" : "[likely course]"}?"</p>
                    </div>
                    <div style={boxStyle("warning")}>
                      <p style={{ fontSize: "13px", color: colors.warning, margin: 0, fontWeight: "600" }}>⚠️ Confirm the course. Grades don't always match courses - let them correct you if needed.</p>
                    </div>
                    {qualificationStatus === "qualified" && (
                      <div style={{ background: colors.ctaGreen, padding: "16px", border: "2px solid #8fb300", marginTop: "12px" }}>
                        <p style={{ margin: 0, fontWeight: "700", color: colors.darkBlue }}>✓ QUALIFIED - Continue to Kill Zombies</p>
                      </div>
                    )}
                    {qualificationStatus === "ai-coach" && (
                      <div style={{ background: colors.lightBlue, padding: "16px", border: `2px solid ${colors.mainBlue}`, marginTop: "12px" }}>
                        <p style={{ margin: 0, fontWeight: "700", color: colors.darkBlue }}>→ PIVOT TO AI MATH COACH ($14/mo)</p>
                        <button onClick={() => setCurrentStep("aicoach")} style={{ marginTop: "8px", padding: "8px 16px", background: colors.mainBlue, color: colors.white, border: "none", cursor: "pointer", fontFamily: "Inter", fontWeight: "600" }}>Go to AI Coach Script →</button>
                      </div>
                    )}
                    {qualificationStatus === "no-product" && (
                      <div style={{ background: "#ffdddd", padding: "16px", border: `2px solid ${colors.warning}`, marginTop: "12px" }}>
                        <p style={{ margin: 0, fontWeight: "700", color: colors.warning }}>✗ NO PRODUCT</p>
                        <p style={{ margin: "8px 0 0", fontSize: "14px", color: colors.darkBlue }}>"Our courses go up to Algebra 2. We don't have anything for Pre-Calc or AP yet - but if you've got younger kids who need help, I'd love to help with that."</p>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* ZOMBIES */}
              {currentStep === "zombies" && (
                <>
                  <div style={{ background: colors.mainBlue, padding: "16px", borderBottom: `4px solid ${colors.darkBlue}` }}>
                    <h2 style={{ margin: 0, color: colors.white, fontSize: "24px", fontWeight: "800" }}>KILL ZOMBIES</h2>
                    <p style={{ margin: "4px 0 0 0", color: colors.lightBlue, fontSize: "14px" }}>Decision Maker Check (30 sec)</p>
                  </div>
                  <div style={{ background: colors.ctaGreen, padding: "12px 16px", borderBottom: `2px solid ${colors.darkBlue}` }}>
                    <p style={{ margin: 0, fontWeight: "700", fontSize: "13px", color: colors.darkBlue }}>🎯 GOAL: Handle the spouse/decision-maker objection BEFORE you pitch.</p>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={boxStyle("warning")}>
                      <p style={{ fontSize: "13px", color: colors.warning, margin: 0, fontWeight: "600" }}>⚠️ If you wait until the close, it's too late. Kill this zombie NOW.</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Decision maker question</span>
                      <p style={scriptStyle}>"Before I tell you more, quick question: are you the one who makes decisions about {displayName}'s education, or is there someone else - spouse, partner - who'd need to be involved as well?"</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "16px" }}>
                      <div style={boxStyle("tip")}>
                        <p style={{ fontWeight: "700", fontSize: "13px", color: colors.darkBlue, margin: "0 0 8px" }}>IF "JUST ME":</p>
                        <p style={scriptStyle}>"Perfect. And is {displayName} on board with getting some help, or is this a surprise?"</p>
                        <div style={{ fontSize: "13px", marginTop: "8px", color: colors.darkBlue }}>
                          <p style={{ margin: "4px 0" }}><strong>If kid isn't on board:</strong></p>
                          <p style={{ margin: 0, fontStyle: "italic" }}>"Got it. That's actually pretty common. Most kids who resist at first have had bad experiences with boring tutoring. Eddie is different - I'll explain why in a sec. And we have a 30-day money-back guarantee, so if {displayName} genuinely doesn't take to it, you're fully covered."</p>
                        </div>
                      </div>
                      <div style={boxStyle("default")}>
                        <p style={{ fontWeight: "700", fontSize: "13px", color: colors.darkBlue, margin: "0 0 8px" }}>IF SPOUSE NEEDED:</p>
                        <p style={scriptStyle}>"Are [they] around now? I can answer [their] questions directly."</p>
                        <div style={{ fontSize: "13px", marginTop: "8px", color: colors.darkBlue }}>
                          <p style={{ margin: "4px 0" }}><strong>If not around:</strong></p>
                          <p style={{ margin: 0, fontStyle: "italic" }}>"No problem. We have a 30-day money-back guarantee, so they can see it in action before you're committed to anything."</p>
                        </div>
                      </div>
                    </div>
                    <div style={boxStyle("warning")}>
                      <p style={{ fontSize: "13px", color: colors.warning, margin: 0, fontWeight: "600" }}>⚠️ This prevents "need to talk to spouse" at close</p>
                    </div>
                  </div>
                </>
              )}

              {/* LABEL */}
              {currentStep === "label" && (
                <>
                  <div style={{ background: colors.mainBlue, padding: "16px", borderBottom: `4px solid ${colors.darkBlue}` }}>
                    <h2 style={{ margin: 0, color: colors.white, fontSize: "24px", fontWeight: "800" }}>LABEL</h2>
                    <p style={{ margin: "4px 0 0 0", color: colors.lightBlue, fontSize: "14px" }}>Confirm Understanding (30 sec)</p>
                  </div>
                  <div style={{ background: colors.ctaGreen, padding: "12px 16px", borderBottom: `2px solid ${colors.darkBlue}` }}>
                    <p style={{ margin: 0, fontWeight: "700", fontSize: "13px", color: colors.darkBlue }}>🎯 GOAL: Name their problem back to them. They must hear it and agree.</p>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Discovery Q1 - The Problem</span>
                      <p style={scriptStyle}>"So tell me, what's been going on with math that made you reach out to us?"</p>
                    </div>
                    <div style={{ background: "#fff3cd", padding: "14px", border: "2px solid #ffc107", marginBottom: "12px" }}>
                      <p style={{ margin: 0, fontWeight: "700", fontSize: "13px", color: colors.darkBlue }}>🤝 EMPATHY CHECK - Do this EVERY time:</p>
                      <p style={{ margin: "8px 0 0", fontSize: "13px", color: colors.darkBlue }}><strong>1. REPEAT</strong> their problem back: <em>"So {displayName} is struggling with..."</em></p>
                      <p style={{ margin: "4px 0 0", fontSize: "13px", color: colors.darkBlue }}><strong>2. ACKNOWLEDGE</strong> it: <em>"That must be really frustrating..."</em></p>
                      <p style={{ margin: "4px 0 0", fontSize: "13px", color: colors.darkBlue }}><strong>3. ASSOCIATE</strong>: <em>"We hear this a lot from parents, you're definitely not alone."</em></p>
                    </div>
                    <p style={{ fontSize: "13px", color: colors.mainBlue, margin: "8px 0", fontWeight: "600" }}>💡 Capture in sidebar → Pain Points</p>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Discovery Q2 - Success Vision</span>
                      <p style={scriptStyle}>"And what would success look like for {displayName} by the end of this school year?"</p>
                    </div>
                    <p style={{ fontSize: "13px", color: colors.mainBlue, margin: "8px 0", fontWeight: "600" }}>💡 Capture in sidebar → Goal</p>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Discovery Q3 - Urgency</span>
                      <p style={scriptStyle}>"What made you reach out now, versus a few months ago?"</p>
                    </div>
                    <p style={{ fontSize: "13px", color: colors.mainBlue, margin: "8px 0", fontWeight: "600" }}>💡 Capture in sidebar → Urgency</p>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Name it back</span>
                      <p style={scriptStyle}>"Okay, so let me make sure I've got this right. {displayName} is in {displayGrade} taking {displayCourse}. The main challenge is {painPoints || "[their specific pain - use their words]"}. And what you really want is {parentGoal || "[their stated goal]"}. Is that right?"</p>
                    </div>
                    <div style={boxStyle("tip")}>
                      <p style={{ fontSize: "13px", color: "#228B22", margin: 0, fontWeight: "600" }}>✓ Wait for "Yes, exactly" before proceeding</p>
                    </div>
                  </div>
                </>
              )}

              {/* PAIN */}
              {currentStep === "pain" && (
                <>
                  <div style={{ background: colors.mainBlue, padding: "16px", borderBottom: `4px solid ${colors.darkBlue}` }}>
                    <h2 style={{ margin: 0, color: colors.white, fontSize: "24px", fontWeight: "800" }}>PAIN CYCLE</h2>
                    <p style={{ margin: "4px 0 0 0", color: colors.lightBlue, fontSize: "14px" }}>Exhaust Prior Attempts (2-3 min)</p>
                  </div>
                  <div style={{ background: colors.ctaGreen, padding: "12px 16px", borderBottom: `2px solid ${colors.darkBlue}` }}>
                    <p style={{ margin: 0, fontWeight: "700", fontSize: "13px", color: colors.darkBlue }}>🎯 GOAL: Prospects don't buy without pain. Your job is to surface it.</p>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={boxStyle("warning")}>
                      <p style={{ fontSize: "13px", color: colors.warning, margin: 0, fontWeight: "600" }}>⚠️ THIS IS THE MOST IMPORTANT PHASE - Don't skip!</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Start the cycle</span>
                      <p style={scriptStyle}>"Before I tell you about what we do, I want to understand what you've already tried. What have you done so far to help {displayName} with math?"</p>
                    </div>
                    <p style={{ fontSize: "13px", color: colors.mainBlue, margin: "8px 0", fontWeight: "600" }}>💡 Common answers: YouTube, Khan Academy, hired a tutor, parent helped, extra homework</p>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Keep digging</span>
                      <p style={scriptStyle}>"Okay, and how did that go?"</p>
                      <p style={{ fontSize: "13px", color: colors.darkBlue, margin: "8px 0", fontStyle: "italic" }}>[Let them explain why it didn't work. Don't interrupt.]</p>
                      <p style={scriptStyle}>"Got it. What else have you tried?"</p>
                      <p style={scriptStyle}>"Anything else?"</p>
                    </div>
                    <div style={boxStyle("tip")}>
                      <p style={{ fontSize: "13px", color: colors.mainBlue, margin: 0, fontWeight: "600" }}>💡 🔄 Keep asking "what else?" until they've exhausted all prior attempts</p>
                    </div>
                    <p style={{ fontSize: "13px", color: colors.mainBlue, margin: "12px 0", fontWeight: "600" }}>💡 Capture in sidebar → Prior Attempts</p>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Summarize</span>
                      <p style={scriptStyle}>"So you've tried {priorAttempts || "[list everything]"}, and none of it has really stuck. Is that fair to say?"</p>
                      <div style={{ marginTop: "12px" }}>
                        <span style={labelStyle}>Duration</span>
                        <p style={scriptStyle}>"How long has this been going on?"</p>
                      </div>
                      <div style={{ marginTop: "12px" }}>
                        <span style={labelStyle}>Stakes</span>
                        <p style={scriptStyle}>"And if nothing changes, what happens? Like, where does {displayName} end up in 6 months if this doesn't get fixed?"</p>
                      </div>
                    </div>
                    <div style={boxStyle("tip")}>
                      <p style={{ fontSize: "13px", color: colors.mainBlue, margin: 0, fontWeight: "600" }}>💡 This makes the stakes real. Let them verbalize the consequences.</p>
                      <p style={{ fontSize: "13px", margin: "8px 0 0", color: colors.darkBlue }}><strong>Active listening cues:</strong> "That makes sense." "I hear that a lot." "That's really common at this grade."</p>
                    </div>
                  </div>
                </>
              )}

              {/* SELL */}
              {currentStep === "sell" && (
                <>
                  <div style={{ background: colors.mainBlue, padding: "16px", borderBottom: `4px solid ${colors.darkBlue}` }}>
                    <h2 style={{ margin: 0, color: colors.white, fontSize: "24px", fontWeight: "800" }}>SELL THE VACATION</h2>
                    <p style={{ margin: "4px 0 0 0", color: colors.lightBlue, fontSize: "14px" }}>Eddie + What They Get (2-3 min)</p>
                  </div>
                  <div style={{ background: colors.ctaGreen, padding: "12px 16px", borderBottom: `2px solid ${colors.darkBlue}` }}>
                    <p style={{ margin: 0, fontWeight: "700", fontSize: "13px", color: colors.darkBlue }}>🎯 GOAL: Sell the outcome AND set clear expectations.</p>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Transition</span>
                      <p style={scriptStyle}>"Okay, that's really helpful. Can I tell you a bit about how we might be able to help?"</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Eddie Credentials (Lead with this!)</span>
                      <p style={scriptStyle}>"So the teacher is Eddie Kang."</p>
                      <p style={scriptStyle}>"He has a UCLA Pure Mathematics degree. Perfect SAT math score. Nine years teaching in high schools and colleges across the US."</p>
                      <p style={scriptStyle}>"We screened over 3,000 teachers to find him. He was the one."</p>
                      <p style={{ ...scriptStyle, marginTop: "12px" }}>"What makes Eddie different is how he explains things. He can take something confusing and just... make it click. Parents tell us their kids actually start enjoying math - which I know sounds crazy."</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>What their week looks like</span>
                      <p style={scriptStyle}>"{displayCourse} runs twice a week - [Days] at [Time Pacific] / [Time Eastern]. {displayName} follows along with a workbook we provide, so [they] can focus on listening instead of frantically copying notes."</p>
                      <p style={{ ...scriptStyle, marginTop: "12px" }}>"Eddie teaches live - it's interactive, not passive. Students ask questions in chat, work through problems together. We have around 20 students per class - from teaching over 21,000 students, we've found that's where engagement is highest."</p>
                    </div>
                    <div style={{ background: colors.lightBlue, padding: "16px", border: `2px solid ${colors.mainBlue}`, marginBottom: "12px" }}>
                      <p style={{ margin: "0 0 12px", fontWeight: "700", fontSize: "14px", color: colors.darkBlue }}>📅 CLASS SCHEDULE</p>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                        <thead>
                          <tr style={{ background: colors.mainBlue, color: colors.white }}>
                            <th style={{ padding: "8px 12px", textAlign: "left", fontWeight: "700" }}>Course</th>
                            <th style={{ padding: "8px 12px", textAlign: "left", fontWeight: "700" }}>Days</th>
                            <th style={{ padding: "8px 12px", textAlign: "center", fontWeight: "700" }}>PT</th>
                            <th style={{ padding: "8px 12px", textAlign: "center", fontWeight: "700" }}>CT</th>
                            <th style={{ padding: "8px 12px", textAlign: "center", fontWeight: "700" }}>ET</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ background: colors.white }}><td style={{ padding: "8px 12px", fontWeight: "600" }}>Pre-Algebra</td><td style={{ padding: "8px 12px" }}>Mon / Wed</td><td style={{ padding: "8px 12px", textAlign: "center" }}>5:00pm</td><td style={{ padding: "8px 12px", textAlign: "center" }}>7:00pm</td><td style={{ padding: "8px 12px", textAlign: "center" }}>8:00pm</td></tr>
                          <tr style={{ background: "#f8f9fa" }}><td style={{ padding: "8px 12px", fontWeight: "600" }}>Algebra 1</td><td style={{ padding: "8px 12px" }}>Tue / Thu</td><td style={{ padding: "8px 12px", textAlign: "center" }}>5:00pm</td><td style={{ padding: "8px 12px", textAlign: "center" }}>7:00pm</td><td style={{ padding: "8px 12px", textAlign: "center" }}>8:00pm</td></tr>
                          <tr style={{ background: colors.white }}><td style={{ padding: "8px 12px", fontWeight: "600" }}>Geometry</td><td style={{ padding: "8px 12px" }}>Mon / Wed</td><td style={{ padding: "8px 12px", textAlign: "center" }}>6:00pm</td><td style={{ padding: "8px 12px", textAlign: "center" }}>8:00pm</td><td style={{ padding: "8px 12px", textAlign: "center" }}>9:00pm</td></tr>
                          <tr style={{ background: "#f8f9fa" }}><td style={{ padding: "8px 12px", fontWeight: "600" }}>Algebra 2</td><td style={{ padding: "8px 12px" }}>Tue / Thu</td><td style={{ padding: "8px 12px", textAlign: "center" }}>6:00pm</td><td style={{ padding: "8px 12px", textAlign: "center" }}>8:00pm</td><td style={{ padding: "8px 12px", textAlign: "center" }}>9:00pm</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Practice + Video Solutions</span>
                      <p style={scriptStyle}>"After each class, there are practice problems that reinforce what Eddie just taught."</p>
                      <p style={scriptStyle}>"And here's the key part - every single problem has a video solution where Eddie walks through it step by step."</p>
                      <p style={scriptStyle}>"So if {displayName} gets stuck at 9pm doing homework? [They're] not stuck. [They] watch Eddie solve it and understand the approach."</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Recordings</span>
                      <p style={scriptStyle}>"Every lesson is recorded and available instantly."</p>
                      <p style={scriptStyle}>"So if {displayName} misses a class - soccer practice, family dinner, whatever - [they] just watch the recording. [They] don't fall behind."</p>
                      <p style={scriptStyle}>"Some kids actually prefer the recordings because [they] can pause and rewatch the tricky parts."</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>AI Math Coach</span>
                      <p style={scriptStyle}>"Between classes, {displayName} also has access to our AI Math Coach."</p>
                      <p style={scriptStyle}>"It's built on Eddie's teaching methodology. So if [they're] stuck on homework at 10pm, [they] can ask a question, upload a photo of the problem, and get walked through it step by step."</p>
                      <p style={scriptStyle}>"It doesn't just give answers - it teaches [them] how to solve it. Available 24/7."</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>30-Day Guarantee</span>
                      <p style={scriptStyle}>"And here's the best part - we have a 30-day money-back guarantee."</p>
                      <p style={scriptStyle}>"So you've got a full month to see if Eddie's teaching clicks for {displayName}. If for any reason it's not working, full refund, no hassle. We only want happy families."</p>
                    </div>
                    <div style={boxStyle("tip")}>
                      <span style={labelStyle}>Proof Point + Check-in</span>
                      <p style={scriptStyle}>"That said, most families don't need the guarantee - we have 95% parent satisfaction."</p>
                      <p style={scriptStyle}>"How does all of that sound so far?"</p>
                    </div>
                    <p style={{ fontSize: "13px", color: "#228B22", margin: "8px 0", fontWeight: "600" }}>✓ If positive, move to Close</p>
                  </div>
                </>
              )}

              {/* CLOSE */}
              {currentStep === "close" && (
                <>
                  <div style={{ background: colors.mainBlue, padding: "16px", borderBottom: `4px solid ${colors.darkBlue}` }}>
                    <h2 style={{ margin: 0, color: colors.white, fontSize: "24px", fontWeight: "800" }}>CLOSE</h2>
                    <p style={{ margin: "4px 0 0 0", color: colors.lightBlue, fontSize: "14px" }}>Monthly → Trial (1-2 min)</p>
                  </div>
                  <div style={{ background: colors.ctaGreen, padding: "12px 16px", borderBottom: `2px solid ${colors.darkBlue}` }}>
                    <p style={{ margin: 0, fontWeight: "700", fontSize: "13px", color: colors.darkBlue }}>🎯 GOAL: Follow the tiered close. Once they say yes, STOP TALKING.</p>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={boxStyle("warning")}>
                      <p style={{ fontSize: "13px", color: colors.warning, margin: 0, fontWeight: "600" }}>⚠️ If they said "sounds good" → Go straight to Monthly Close</p>
                      <p style={{ fontSize: "13px", color: colors.warning, margin: "4px 0 0", fontWeight: "600" }}>⚠️ If hesitation/objection → Handle first, then close</p>
                    </div>
                    <div style={{ background: colors.mainBlue, color: colors.white, padding: "16px", marginBottom: "12px" }}>
                      <p style={{ fontWeight: "700", fontSize: "16px", margin: 0 }}>TIER 1: MONTHLY CLOSE (Default)</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Eddie Price Anchor</span>
                      <p style={scriptStyle}>"So let me walk you through the investment."</p>
                      <p style={scriptStyle}>"Before Eddie joined us, he was charging $100 an hour for private lessons."</p>
                      <p style={scriptStyle}>"Two lessons a week, that's 8 lessons a month - $800 a month just for his time. No workbooks, no practice problems, no video solutions."</p>
                      <div style={{ marginTop: "12px" }}>
                        <span style={labelStyle}>Our Price</span>
                        <p style={scriptStyle}>"With us, you get Eddie teaching {displayName} twice a week..."</p>
                        <p style={scriptStyle}>"PLUS the workbooks..."</p>
                        <p style={scriptStyle}>"PLUS practice problems after every lesson..."</p>
                        <p style={scriptStyle}>"PLUS video solutions for every single question..."</p>
                        <p style={scriptStyle}>"PLUS the 24/7 AI Math Coach between classes."</p>
                        {hasSiblings ? (
                          <>
                            <p style={scriptStyle}>"For {childName || "[Child 1]"}, that's $149 a month."</p>
                            <p style={scriptStyle}>"And because you're enrolling {siblingName || "[Child 2]"} as well, [they] get 20% off - that's $119 a month."</p>
                            <p style={scriptStyle}>"So the total for both kids is $268 a month."</p>
                          </>
                        ) : (
                          <p style={scriptStyle}>"All of that for $149 a month."</p>
                        )}
                      </div>
                      <div style={{ marginTop: "12px" }}>
                        <span style={labelStyle}>Flexibility + Guarantee</span>
                        <p style={scriptStyle}>"No lock-in. You can cancel anytime."</p>
                        <p style={scriptStyle}>"Same 30-day money-back guarantee, so you're fully protected."</p>
                      </div>
                      <div style={{ marginTop: "12px" }}>
                        <span style={labelStyle}>Ask</span>
                        <p style={scriptStyle}>"The next {displayCourse} class is [Day] at [Time]."</p>
                        <p style={scriptStyle}>"Should I get {displayName} set up so [they] can start this week?"</p>
                      </div>
                    </div>
                    <div style={{ background: "#ffdddd", padding: "16px", border: `2px solid ${colors.warning}`, marginBottom: "12px" }}>
                      <p style={{ fontSize: "13px", color: colors.warning, margin: 0, fontWeight: "600" }}>⚠️ When they say YES → STOP TALKING. Don't keep selling.</p>
                      <p style={{ margin: "8px 0 0", fontStyle: "italic", color: colors.darkBlue }}>"Great, let me send you the link to get {displayName} enrolled."</p>
                      <p style={{ fontSize: "13px", color: colors.mainBlue, margin: "8px 0 0", fontWeight: "600" }}>💡 Switch to PAY LINK tab in sidebar →</p>
                    </div>
                    <div style={{ background: colors.lightBlue, padding: "16px", border: `2px solid ${colors.mainBlue}`, marginBottom: "12px" }}>
                      <p style={{ fontWeight: "700", fontSize: "14px", margin: "0 0 12px", color: colors.darkBlue }}>📞 IF HESITANT: PHONE BONUS (Urgency)</p>
                      <p style={scriptStyle}>"One more thing - because you're signing up on this call, I can give you access to all the materials from lessons {displayName} has missed so far this semester."</p>
                      <p style={scriptStyle}>"That means all the recordings, all the workbooks, all the practice problems, all the video solutions."</p>
                      <p style={scriptStyle}>"That way {displayName} can catch up on anything [they've] missed."</p>
                      <p style={scriptStyle}>"This is only available when you sign up on a phone call with us."</p>
                    </div>
                    <div style={{ background: "#f5f5f5", padding: "16px", border: `2px solid ${colors.darkBlue}`, marginBottom: "12px" }}>
                      <p style={{ fontWeight: "700", fontSize: "14px", margin: "0 0 12px" }}>TIER 2: TRIAL SAVE (Last resort only)</p>
                      <p style={scriptStyle}>"Tell you what. I can see you want to make sure this is right for {displayName}."</p>
                      <p style={scriptStyle}>"Try it for $7 for a week. Full access to everything - the live classes, workbooks, all of it."</p>
                      <p style={scriptStyle}>"If it's not a fit, you cancel, no questions asked. But if {displayName} loves it, you're all set."</p>
                      <p style={scriptStyle}>"Fair?"</p>
                    </div>
                    <div style={boxStyle("default")}>
                      <p style={{ fontWeight: "700", fontSize: "14px", color: colors.darkBlue, margin: "0 0 12px" }}>HANDLING "NEED TO THINK"</p>
                      <p style={{ fontSize: "14px", color: colors.darkBlue, margin: "4px 0" }}><strong>Ask rapid-fire:</strong></p>
                      <p style={scriptStyle}>"What's your main concern?"</p>
                      <p style={scriptStyle}>"What are you afraid of having happen?"</p>
                      <p style={scriptStyle}>"What would make this a yes?"</p>
                      <p style={scriptStyle}>"What would make this a no?"</p>
                    </div>
                  </div>
                </>
              )}

              {/* CONFIRM */}
              {currentStep === "confirm" && (
                <>
                  <div style={{ background: colors.mainBlue, padding: "16px", borderBottom: `4px solid ${colors.darkBlue}` }}>
                    <h2 style={{ margin: 0, color: colors.white, fontSize: "24px", fontWeight: "800" }}>PAYMENT CONFIRMATION</h2>
                    <p style={{ margin: "4px 0 0 0", color: colors.lightBlue, fontSize: "14px" }}>Stay on the line</p>
                  </div>
                  <div style={{ background: colors.ctaGreen, padding: "12px 16px", borderBottom: `2px solid ${colors.darkBlue}` }}>
                    <p style={{ margin: 0, fontWeight: "700", fontSize: "13px", color: colors.darkBlue }}>🎯 GOAL: Confirm payment goes through. Welcome them properly.</p>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={boxStyle("warning")}>
                      <p style={{ fontSize: "13px", color: colors.warning, margin: 0, fontWeight: "600" }}>⚠️ Stay on the line until payment is confirmed. Don't hang up early.</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Send link</span>
                      <p style={scriptStyle}>"Great choice. I'm sending you the registration link now - you should see it come through."</p>
                      <div style={{ marginTop: "12px" }}>
                        <span style={labelStyle}>While they pay</span>
                        <p style={scriptStyle}>"Perfect, I'll stay on the line while you complete that. Let me know when you're done and I'll confirm everything is set up correctly."</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "13px", color: colors.mainBlue, margin: "8px 0", fontWeight: "600" }}>💡 Wait for them to complete payment</p>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Confirm payment</span>
                      <p style={scriptStyle}>"Perfect, I can see that's gone through. {displayName} is all set!"</p>
                      <div style={{ marginTop: "12px" }}>
                        <span style={labelStyle}>Next steps</span>
                        <p style={scriptStyle}>"Here's what happens next: you'll get an email to set up your parent account, and then {displayName}'s student account. {displayName}'s first class is [Day] at [Time]. Any questions before we wrap up?"</p>
                      </div>
                    </div>
                    <div style={boxStyle("tip")}>
                      <span style={labelStyle}>Final send-off</span>
                      <p style={scriptStyle}>"Great! Welcome to MyEdSpace. {displayName} is going to do great with Eddie. Talk soon!"</p>
                    </div>
                  </div>
                </>
              )}

              {/* AI COACH */}
              {currentStep === "aicoach" && (
                <>
                  <div style={{ background: colors.mainBlue, padding: "16px", borderBottom: `4px solid ${colors.darkBlue}` }}>
                    <h2 style={{ margin: 0, color: colors.white, fontSize: "24px", fontWeight: "800" }}>AI MATH COACH</h2>
                    <p style={{ margin: "4px 0 0 0", color: colors.lightBlue, fontSize: "14px" }}>For Grade 5 & Below ($14/mo)</p>
                  </div>
                  <div style={{ background: colors.ctaGreen, padding: "12px 16px", borderBottom: `2px solid ${colors.darkBlue}` }}>
                    <p style={{ margin: 0, fontWeight: "700", fontSize: "13px", color: colors.darkBlue }}>🎯 GOAL: Quick close. Skip Kill Zombies - minimal friction at this price.</p>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={boxStyle("tip")}>
                      <p style={{ fontSize: "13px", color: colors.mainBlue, margin: 0, fontWeight: "600" }}>💡 Skip Kill Zombies for AI Coach. At $14/mo, decision-maker friction is minimal.</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Transition</span>
                      <p style={scriptStyle}>"So {displayName} is in {displayGrade} - our live courses start from Pre-Algebra which is typically 6th grade and up. But I've got something that might actually be perfect for {displayName}."</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Introduce</span>
                      <p style={scriptStyle}>"We have our AI Math Coach. It was built by Eddie - our lead teacher, UCLA Pure Math major, perfect SAT math score - it uses his exact teaching methodology. It covers everything from basic math up through Algebra 2."</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Differentiate from ChatGPT</span>
                      <p style={scriptStyle}>"Here's what makes it different from just using ChatGPT or Google: it doesn't just give {displayName} the answer. It uses the Socratic method - it asks questions to guide them to figure it out themselves. That's how real learning happens."</p>
                      <p style={{ ...scriptStyle, marginTop: "12px" }}>"So if {displayName} is stuck on homework, instead of just showing the solution, it asks 'What do you think the first step is?' and 'Why did you choose that?' It teaches [them] HOW to think through problems, not just what the answer is."</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Features</span>
                      <p style={scriptStyle}>"And it's actually designed for math - unlike ChatGPT. It has proper math input built in, so {displayName} can type fractions, exponents, square roots easily without it getting confused."</p>
                      <p style={{ ...scriptStyle, marginTop: "12px" }}>"Even easier - {displayName} can just take a photo of [their] homework problem and upload it. The AI reads the question and walks [them] through it. Available 24/7, unlimited questions."</p>
                    </div>
                    <div style={boxStyle("rep")}>
                      <span style={labelStyle}>Close</span>
                      <p style={scriptStyle}>"$14 a month. No contract, cancel anytime. Want me to get {displayName} set up?"</p>
                    </div>
                    <div style={boxStyle("tip")}>
                      <p style={{ fontSize: "13px", color: colors.mainBlue, margin: "0 0 8px", fontWeight: "600" }}>💡 After closing, upsell siblings:</p>
                      <p style={scriptStyle}>"Do you have any other kids in grades 6-11 who might need help with Pre-Algebra through Algebra 2?"</p>
                    </div>
                  </div>
                </>
              )}

              {/* Navigation */}
              <div style={{ background: "#f5f5f5", padding: "16px", borderTop: `2px solid ${colors.darkBlue}`, display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={() => { if (currentStep === "aicoach") setCurrentStep("clarify"); else if (currentIndex > 0) setCurrentStep(stepOrder[currentIndex - 1]); }}
                  disabled={currentIndex === 0 && currentStep !== "aicoach"}
                  style={{ padding: "12px 24px", background: colors.white, color: colors.darkBlue, border: `2px solid ${colors.darkBlue}`, cursor: currentIndex === 0 && currentStep !== "aicoach" ? "not-allowed" : "pointer", fontFamily: "Inter", fontWeight: "700", fontSize: "14px", opacity: currentIndex === 0 && currentStep !== "aicoach" ? 0.5 : 1 }}
                >← PREVIOUS</button>
                <button
                  onClick={() => { if (currentStep !== "aicoach" && currentIndex < stepOrder.length - 1) setCurrentStep(stepOrder[currentIndex + 1]); }}
                  disabled={currentIndex === stepOrder.length - 1 || currentStep === "aicoach"}
                  style={{ padding: "12px 24px", background: colors.mainBlue, color: colors.white, border: `2px solid ${colors.darkBlue}`, cursor: currentIndex === stepOrder.length - 1 || currentStep === "aicoach" ? "not-allowed" : "pointer", fontFamily: "Inter", fontWeight: "700", fontSize: "14px", opacity: currentIndex === stepOrder.length - 1 || currentStep === "aicoach" ? 0.5 : 1 }}
                >NEXT →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "16px", borderTop: `2px solid ${colors.darkBlue}`, fontSize: "14px", color: colors.darkBlue }}>
          <p style={{ margin: 0, fontWeight: "700" }}>Confident, not pushy. Helpful, not salesy.</p>
          <p style={{ margin: "4px 0 0", fontSize: "12px" }}>30-day guarantee • $149/mo • Eddie Kang • UCLA Pure Math • Perfect SAT</p>
        </div>
      </div>
    </div>
  );
};

export default USSalesCallFlow;
