# Preliminärt prognosintervall

Mittprognosen bygger på Scoring Zone-planen och den begränsade formjusteringen.
Handicap påverkar för närvarande enbart intervallets bredd.

I väntan på historik används det egna antagandet:

    sigma18 = 3,5 + 0,1 × max(Handicap Index, 0)
    sigmaKvar = sigma18 × sqrt(återstående hål / 18)
    intervall = prognos ± 1,28155 × sigmaKvar

Det är ett nominellt centralt 80-procents prediktionsintervall under antagandet
om oberoende hålvariation och normalfördelade prognosfel. Gränserna avrundas utåt
till heltal och begränsas nedåt av minst ett slag per återstående hål.
Efter 18 hål är båda gränserna lika med faktisk score; då visas bara slutscoren.
Ingen extra osäkerhet i grundnivån antas (baselineStandardDeviation är noll).

3,5 och 0,1 är provisoriska produktantaganden, inte en officiell handicapformel
eller en verifierad skattning för appens spelare. Påståendet om ungefär 3–4 slags
standardavvikelse för skickliga spelare är inte generellt fastställt här.
[USGA:s handicapöversyn](https://www.usga.org/content/usga/home-page/handicapping/world-handicap-system/world-handicap-system--education-resources-for-club-administrators/handicap-review-toolkit/handicap-review-tool-faqs.html)
använder förväntad standardavvikelse per handicapnivå och påpekar att höga scorer
kan avvika från normalfördelningen; den källan verifierar inte vår valda formel.

Gränssnittet visar därför ”preliminärt spann”. Faktisk täckning på 80 procent
är ännu inte validerad, särskilt eftersom Scoring Zone-planen inte nödvändigtvis
motsvarar spelarens genomsnitt. Ingen sannolikhet att klara målet visas.

När tillförlitlig rondhistorik finns ska prognoser spelas upp kronologiskt med
enbart tidigare tillgängliga data. Mät täckning och intervallbredd per handicap
och antal spelade hål, och ersätt startantagandet med historiska prognosfel.
Grundbredden minskar under rundan, men heltalsavrundning och flyttad mittprognos
kan ge oförändrad eller tillfälligt större visad bredd mellan två hål.
