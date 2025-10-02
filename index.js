const restify = require('restify');
const { BotFrameworkAdapter } = require('botbuilder');

// Δημιουργία adapter
const adapter = new BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

// Δημιουργία server
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log(`Bot listening on ${server.url}`);
});

// Λογική bot
adapter.onTurn(async (context) => {
    if (context.activity.type === 'message') {
        const text = context.activity.text.toLowerCase();
        if (text.includes('πυρκαγιά')) {
            await context.sendActivity('🔥 Πυρκαγιά! Απομακρύνσου και κάλεσε την πυροσβεστική.');
        } else if (text.includes('σεισμός')) {
            await context.sendActivity('🌍 Σεισμός! Προστατεύσου κάτω από ανθεκτικό τραπέζι.');
        } else {
            await context.sendActivity('Γράψε "πυρκαγιά" ή "σεισμός" για οδηγίες.');
        }
    }
});
