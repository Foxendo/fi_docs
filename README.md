# Это Фи.
<img src="assets/filogo.png" width="25%" align="center"/>

Фи - бот, обладающий довольно обширным количеством функций, но основные, так или иначе, связаны с языковыми моделями. Поэтому большая часть этой доки будет именно о них.

Если возникнут вопросы даже после прочтения этой документации, попробуйте посмотреть интересующую вас команду через `fi help (команда)`, или просто введите `fi help`. 

# Содержание
* [Способы общения с Фи](#способы-общения-с-фи)
* [Подкоманды](#подкоманды)
* [Дополнительные возможности](#дополнительные-возможности)
  * [Инструменты](#инструменты)
* [Кастомизация](#кастомизация)
* [Кратко о моделях](#кратко-о-моделях)
* [Остальные команды с ИИ](#остальные-команды-с-ии)
* [Последнее](#последнее)

# Способы общения с Фи
К Фи можно обратиться двумя разными способами, и в одном случае это будет команда, а в другом - _одноразовое_ обращение к языковой модели.

Пример команды: `fi chat` , где `fi` - префикс, а `chat` - команда.

Примеры обращения: `Фи, привет!`, `Hello, Fi.` или `@Fi Че кого?`  
Как видно - обращения всегда через запятую, или уже конкретным упоминанием Фи (через @), иначе она просто проигнорит ваши попытки заговорить.

Но также к Фи можно обратиться ещё двумя способами:
1. Ответить на любое сообщение Фи, при этом отметив её. В этом случае она ответит вне зависимости от того, написали ли вы "Фи," или нет. Так же, в данном случае, она учтет контекст того сообщения, на которое вы ответите.
<img src="assets/example1.png" width="50%" height="50%" align="center"/>
<br clear="both"/>

2. Ответить на сообщение любого человека, и отметить Фи - либо через @Fi, либо через "Фи,". В этом случае она так же учтет контекст того сообщения, на которое вы отвечаете.
<img src="assets/example2.png" width="75%" height="75%" align="center"/>
<br clear="both"/>

|❗Учтите❗|
|:----| 
| При обращении к Фи любыми способами, кроме как через команду `fi chat`, она не будет помнить ничего, кроме вашего текущего сообщения и сообщения, на которое вы отвечаете (если таковое есть). Поэтому для конструктивного диалога всегда используйте `fi chat`. |

`fi chat` является командой, которая позволяет вам начать диалог с Фи, где она будет помнить все сообщения, а вам не нужно будет никак обращаться к ней по-особенному. Имеется дополнительный аргумент `private` (т.е. полная команда будет звучать как `fi chat private`), при котором вместо того, чтобы начинать диалог на том же канале, где вы находитесь, Фи создаст новый, приватный тред (тему), где вы сможете с ней общаться.

<br clear="both"/>
<img src="assets/example3.png" width="50%" height="50%" align="center"/>
<br clear="both"/>

Как видно, Фи помнит все сообщения.  
`quit` здесь служит одной из подкоманд, о которых ниже.

Одна дополнительная возможность `fi chat` в том, что вы можете ответить на какое-либо сообщение Фи (только Фи), написав при этом `fi chat`. Это создаст новый чат, в котором Фи будет помнить то сообщение, на которое вы ответили, и то сообщение, на которое ответила Фи.
К примеру, если вы напишите "Привет", Фи ответит "Здравствуйте", а вы ответите на ее сообщение, написав `fi chat`, то она будет помнить оба этих сообщения, и вы сможете продолжить диалог.

# Подкоманды

|❗Уточнение❗|
|:---|
| Cледующие "обращения" к Фи не относится к двум основным (через префикс `fi` или через запятую), т.к. являются подкомандами. Поэтому используйте их без префиксов, и без запятых. |
| К примеру, в случае с `stop` не пишите `fi stop` или `Fi, stop`, а просто напишите `stop` |


- `regen`: После того, как Фи написала какое-либо сообщение, но оно вам не понравилось по какой-либо причине, вы можете написать `regen`. Сразу после этого, Фи перепишет сообщение.  
(**Примечание**: по умолчанию у Фи стоит достаточно низкая температура (а именно 0.3), поэтому сообщение, скорее всего, не будет сильно отличаться. Об этом позже, в [кастомизации](#кастомизация).)
Также, отмечу, что перед написанием `regen`, вы можете отредактировать ваше сообщение, после чего Фи учтет изменения в сообщении, и уже, в зависимости от них, может ответить вообще по-другому.

- `stop`: Если Фи очень долго пишет сообщение, и вам надоело ждать, напишите `stop`. Это остановит написание сообщения. Далее вы можете уже написать `regen`, или продолжить диалог с незаконченным сообщением от Фи (действуйте по усмотрению).
  
- `quit` (только в `fi chat`): Если хотите закончить диалог с Фи, напишите `quit`.

# Дополнительные возможности

Фи, по умолчанию, умеет только переписываться. Это было сделано для того, чтобы Фи не использовала ненужных инструментов, когда не надо. Это можно поменять ([следующая глава](#кастомизация)).

Фи умеет смотреть файлы (PDF, TXT, DOCX). Просто прикрепите их вместе со своим сообщением. Учтите, что из-за того, что Фи хостится на видеокарте студента, которая вот-вот сгорит, максимальный контекст (память) Фи был поставлен на 8192. Этого хватит для документа в, примерно, 30000 символов.

Одна из моделей Фи (3 модель [здесь](#кратко-о-моделях)) умеет анализировать картинки. Также пришлите их вместе со своим сообщением, или, если по какой-то причине сами фотографии не присылаются, добавьте ссылку на фотографию в конце сообщения, вот так: `image:(url)`. При этом, все сообщение будет выглядить примерно так: `Фи, посмотри фоточку. image:(url)`. Если текущая модель не умеет анализировать картинки, Фи об этом напишет, попрося поменять на нужную модель.

## Инструменты

Также имеются инструменты, такие как **поиск в интернете**, **WolframAlpha** и **интерпретатор кода**:
  - Поиск - Фи ищет нужное количество страниц нужного запроса (от 1 до 4), далее суммирует всю информацию, выдает вам (с источниками), и запоминает все, что суммировала, сама. Работает надежно.
  - Wolfram - просто отсылает какой-либо пример в WolframAlpha, и получает ответ. Работает относительно надежно.
  - Интерпретатор кода - Фи старается писать код на Python, и старается получить какой-то вывод. Это может быть число, строка, график, и т.д. **Работает НЕНАДЕЖНО**, отключайте если он вам не нужен.

То, как их поменять, написано в [следующей главе. (`fi tools`)](#кастомизация)

# Кастомизация

Через такие команды как `fi mode`, `fi tools`, `fi personality` можно кастомизировать Фи под себя. Есть еще более глобальная команда, `fi modelswitch`, которая поменяет модель. Она поменяется для всех, т.к вышеупомянутый студент не может позволить себе запускать все модели сразу.

- `fi mode` - Меняет режим, т.е. температуру, т.е "случайность" Фи. Есть 4 режима, от случайного к менее случайному: `very creative` - температура в 5.0, `creative` - температура в 1.5, `precise` - температура в 0.3, и `literal` - температура в 0.1 . Советую использовать только `creative` и `precise`. Можно поменять как написав команду с нужным режимом (`fi mode precise`), так и просто написать `fi mode`, а потом вам выведется список с режимами, и вы напишете только нужную цифру, например `1` (что будет соответствовать `very creative`).
- `fi tools` - Подключает различные [инструменты](#инструменты). Они подключаются вводя нужную комбинацию + и -. К примеру, в данный момент порядок такой: поиск, Wolfram, интерпретатор. Если я хочу включить только поиск, я напишу `fi tools +--`. Но так же эту команду можно вводить и без аргументов, просто введя `fi tools`. Потом выведется список со всеми инструментами, и там уже можете ввести нужную комбинацию. (Помните, без `fi`, а просто, условно, `++-`.)  
- `fi personality` - Служит для изменения системного промпта (характера) Фи, а так же имени и аватарки под себя. Учтите, что при изменении имени и аватарки, некоторые функции МОГУТ работать криво.  
Просто впишите `fi personality`, а дальше Фи вас проинструктирует.
- `fi modelswitch` - Служит для изменения модели. Введите команду, и вам выдастся список моделей. На данный момент их 3 - Qwen, QwQ и MiniCPM. Qwen - стандартная, работает быстро и хорошо. QwQ - очень медленная, и думает очень долго, но лучше всего решает задачи на логику. MiniCPM - худшая из всех, не поддерживает системный промпт (характер), но может читать картинки, и делает это даже на уровне платных моделей, типа ChatGPT.

# Кратко о моделях
Как уже было сказано выше, Фи включает в себя 3 основные модели, а именно:
1. `Qwen2.5-14b`. Эта модель, примерно, сопоставима с GPT-4o-mini, т.е тем, на который переключается ChatGPT после 16 сообщений. Всегда правильно использует [инструменты](#инструменты), очень хорошо слушает ваши инструкции и работает относительно быстро (20 токенов в секунду).
2. `QwQ-32b`. Эта модель, вообще, сопоставима с o1-mini, так же модель ChatGPT, только уже полностью платная. Может тупить при использовании инструментов, очень неуверенная, но из-за своего механизма "обдумывания", который может занимать до 30 минут, намного чаще приходит к правильному ответу, чем модель 1. Бывает, что неправильно понимает сам вопрос, поэтому старайтесь писать его как можно понятнее. Ответ иногда может быть либо на китайском, либо на английском, это уже фишка модели, поэтому будьте готовы его перевести (можете воспользоваться уже первой моделью, либо обычным переводчиком). Работает очень медленно (6 токенов в секунду).
3. `MiniCPM-2.6`. Работает быстрее всего в связи со своим маленьким размером (30 токенов в секунду), но из-за того, какая модель была использована в качестве основы, (а именно Qwen2-7b), "тупее", чем остальные. Но, в отличие от остальных моделей, умеет смотреть на картинки, и зрение у нее почти на уровне GPT-4o.

Имеется одна дополнительная модель (`Llama-3.2-3b`), которая подключается при использовании модели 2. Она служит только для того, чтобы при поиске чего-то в интернете, вам не приходилось ждать по 5 часов, пока она сформулирует нормальный ответ.
 
# Остальные команды с ИИ
- `fi image (запрос) / (формат (опциональный))` - генерирует картинку, используя [вот этот](https://huggingface.co/spaces/black-forest-labs/FLUX.1-schnell) спейс и модель Flux.1 Schnell. В запрос вписываете что нужно сгенерировать на английском языке, а в размер - формат в форме X:Y. Имеются лимиты на несколько картинок в час.  
  Примеры: `fi image cat / 16:9` сгенерирует кошку в формате 16:9, а `fi image dog` сгенерирует собаку в формате 1:1 (1024x1024)
- `fi web (запрос)` - используя текущую языковую модель, попытается углубленно поискать ответ на ваш вопрос. Отличие от инструмента, которым может пользоваться Фи, в том, что эта команда может занять до 30 минут поиска, т.к будет очень сильно углубляться, пока инструмент займет максимум 5 минут (в среднем 1-2).

Фи также имеет много других команд, не связанных с ИИ (например калькулятор), их вы можете прочекать в `fi help`.

# Последнее
Фи - незаконченный проект. Каждый раз кто-то находит какие-то баги. Я их сразу правлю, но если вдруг чо найдете - пишите, пофикшу.

Еще прошу заметить, что из-за того, что я хостчу эту модель на своем компе, периодически я могу либо сами модели выключать, чтобы освободить память, либо сам компьютер. Поэтому, если вдруг она отвечает, что модели выключены, или сама оффлайн - пишите мне. Бронируйте заранее, когда она нужна будет. 😁

Если она отреагировала пальцем вверх на ваше сообщение (👍), то это значит, что кто-то другой у нее что-то спросил, и она отвечает этому человеку. В таком случае просто подождите. Я не могу в параллели обрабатывать несколько запросов, потому, что она начинает нести бред.

И последнее - как уже было упомянуто в доп. возможностях, контекст - 8192. Поэтому через `fi chat` с ней бесконечно не пообщаешься, в какой-то момент она напишет, что все, кина не будет. Это примерно 16 полных сообщений (т.е каждое в 2000 символов)
