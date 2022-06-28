const SearchFoods = document.querySelector('#SearchFoods');
container = document.querySelector('.usersTable');
showDetails = (product) => {
    container.innerHTML = '';
    let table = '';
    table += `
    <tr>
    <th><button type="submit" onclick="creatTable()">לחזרה לעמוד הקודם</button><th>
        <th>ahuz_ibud_nozlim ${product.ahuz_ibud_nozlim}</th>
        <th>alcohol ${product.alcohol}</th>
        <th>arachidonic ${product.arachidonic}</th>
        <th>arginine ${product.arginine}</th>
        <th>biotin ${product.biotin}</th>
        <th>butyric ${product.butyric}</th>
        <th>calcium ${product.calcium}</th>
        <th>capric ${product.capric}</th>
        <th>caproic ${product.caproic}</th>
        <th>caprylic ${product.caprylic}</th>
        <th>carbohydrates ${product.carbohydrates}</th>
        <th>carotene ${product.carotene}</th>
        <th>cholesterol ${product.cholesterol}</th>
        <th>choline ${product.choline}</th>
        <th>copper ${product.copper}</th>
        <th>cystine ${product.cystine}</th>
        <th>docosahexanoic ${product.docosahexanoic}</th>
        <th>docosapentaenoic ${product.docosapentaenoic}</th>
        <th>edible ${product.edible}</th>
        <th>eicosapentaenoic ${product.eicosapentaenoic}</th>
        <th>erucic ${product.erucic}</th>
        <th>folate ${product.folate}</th>
        <th>folate_dfe ${product.folate_dfe}</th>
        <th>food_energy ${product.food_energy}</th>
        <th>fructose ${product.fructose}</th>
        <th>gadoleic ${product.gadoleic}</th>
        <th>histidine ${product.histidine}</th>
        <th>iodine ${product.iodine}</th>
        <th>iron ${product.iron}</th>
        <th>isoleucine ${product.isoleucine}</th>
        <th>lauric ${product.lauric}</th>
        <th>leucine ${product.leucine}</th>
        <th>linoleic ${product.linoleic}</th>
        <th>linolenic ${product.linolenic}</th>
        <th>lysine ${product.lysine}</th>
        <th>magnesium ${product.magnesium}</th>
        <th>makor ${product.makor}</th>
        <th>manganese ${product.manganese}</th>
        <th>methionine ${product.methionine}</th>
        <th>moisture ${product.moisture}</th>
        <th>mono_unsaturated_fat ${product.mono_unsaturated_fat}</th>
        <th>myristic ${product.myristic}</th>
        <th>niacin ${product.niacin}</th>
        <th>oleic ${product.oleic}</th>
        <th>palmitic ${product.palmitic}</th>
        <th>palmitoleic ${product.palmitoleic}</th>
        <th>pantothenic_acid ${product.pantothenic_acid}</th>
        <th>parinaric ${product.parinaric}</th>
        <th>phenylalanine ${product.phenylalanine}</th>
        <th>phosphorus ${product.phosphorus}</th>
        <th>poly_unsaturated_fat ${product.poly_unsaturated_fat}</th>
        <th>potassium ${product.potassium}</th>
        <th>protein ${product.protein}</th>
        <th>psolet ${product.psolet}</th>
        <th>rank ${product.rank}</th>
        <th>riboflavin ${product.riboflavin}</th>
        <th>saturated_fat ${product.saturated_fat}</th>
        <th>selenium ${product.selenium}</th>
        <th>serine ${product.serine}</th>
        <th>shmmitzrach ${product.shmmitzrach}</th>
        <th>smlmitzrach ${product.smlmitzrach}</th>
        <th>sodium ${product.sodium}</th>
        <th>stearic ${product.stearic}</th>
        <th>sugar_alcohols ${product.sugar_alcohols}</th>
        <th>tarich_idkun ${product.tarich_idkun}</th>
        <th>tarich_ptiha ${product.tarich_ptiha}</th>
        <th>thiamin ${product.thiamin}</th>
        <th>threonine ${product.threonine}</th>
        <th>total_dietary_fiber ${product.total_dietary_fiber}</th>
        <th>total_fat ${product.total_fat}</th>
        <th>total_sugars ${product.total_sugars}</th>
        <th>trans_fatty_acids ${product.trans_fatty_acids}</th>
        <th>tryptophan ${product.tryptophan}</th>
        <th>tyrosine ${product.tyrosine}</th>
        <th>valine ${product.valine}</th>
        <th>vitamin_a_iu ${product.vitamin_a_iu}</th>
        <th>vitamin_a_re ${product.vitamin_a_re}</th>
        <th>vitamin_b6 ${product.vitamin_b6}</th>
        <th>vitamin_b12 ${product.vitamin_b12}</th>
        <th>vitamin_c ${product.vitamin_c}</th>
        <th>vitamin_d ${product.vitamin_d}</th>
        <th>vitamin_e ${product.vitamin_e}</th>
        <th>vitamin_k ${product.vitamin_k}</th>
        <th>zinc ${product.zinc}</th>
        <th>_id ${product._id}</th>
    </tr>`
    container.innerHTML += table;
}

const creatTable = () => {
    let table = '';
    container.innerHTML = '';
    productsArr.forEach((product) => {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerHTML = product.shmmitzrach;
        div.append(h2);
        const btn = document.createElement('button');
        btn.innerHTML = "show details";
        btn.onclick = () => {
            showDetails(product);
        }
        div.append(btn);
        container.append(div);
    })
}
productsArr = '';
SearchFoods.onsubmit = (e) => {
    e.preventDefault();
    const req = fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${search.value}`)
    req.then(response => response.json())
        .then(response => {
            productsArr = response.result.records;
            creatTable();
        }
        )
        .catch(err => console.error(err));
}