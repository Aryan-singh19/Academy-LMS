# CSIT-702(D) Natural Language Processing — Unit-wise Study Notes

> Text processing, language models, POS tagging, parsing, semantics, embeddings and transformer-based NLP.

## Unit 1: Text Processing Basics

### NLP Pipeline & Challenges

NLP turns raw text into structured meaning.

- **NLP:** field enabling computers to process human language
- **Ambiguity:** one expression having several meanings
- **Corpus:** large structured collection of texts

### Tokenisation & Normalisation

Text is split and standardised before analysis.

- **Tokenisation:** splitting text into tokens such as words
- **Stemming:** crude suffix stripping, e.g. Porter stemmer
- **Lemmatisation:** reducing words to dictionary base forms

### Regular Expressions & Edit Distance

Pattern matching and string similarity are core tools.

- **Regular Expression:** pattern describing a set of strings
- **Minimum Edit Distance:** fewest insertions, deletions and substitutions between strings
- **Levenshtein Distance:** edit distance with unit costs

### Morphology

Morphology studies the structure of words.

- **Morpheme:** smallest meaningful unit of language
- **Inflectional Morphology:** changes grammatical features, e.g. walk to walked
- **Finite-state Transducer:** automaton mapping between surface and lexical forms

## Unit 2: Language Modelling

### N-gram Language Models

N-grams estimate word probabilities from counts.

- **Language Model:** assigns probabilities to word sequences
- **Bigram Model:** P(w given previous word) estimated from counts
- **Markov Assumption:** next word depends only on a few previous words

### Smoothing

Smoothing handles unseen n-grams.

- **Laplace Smoothing:** add-one to every count
- **Kneser-Ney Smoothing:** uses continuation counts for lower-order models
- **Backoff:** falling back to shorter n-grams when counts are zero

### Perplexity & Evaluation

Language models are compared by perplexity.

- **Perplexity:** inverse probability of test data normalised by length
- **Held-out Set:** data reserved for tuning and evaluation
- **Out-of-vocabulary Word:** word not seen in training

### Neural Language Models

Neural networks model language with dense vectors.

- **RNN Language Model:** predicts next word using recurrent hidden state
- **LSTM:** recurrent unit with gates handling long-range dependencies
- **Teacher Forcing:** feeding true previous tokens during training

## Unit 3: Syntax & Parsing

### Part-of-Speech Tagging

POS tagging labels each word's grammatical class.

- **POS Tag:** label such as noun, verb or adjective
- **HMM Tagger:** hidden Markov model tagging with transition and emission probabilities
- **Viterbi Algorithm:** dynamic programming for the most likely tag sequence

### Context-Free Grammars

CFGs describe sentence structure.

- **Context-Free Grammar:** rules rewriting a non-terminal into symbols
- **Parse Tree:** tree showing how a sentence derives from the grammar
- **Treebank:** corpus annotated with parse trees, e.g. Penn Treebank

### Parsing Algorithms

Parsers find structures licensed by a grammar.

- **CKY Algorithm:** bottom-up dynamic programming parser for CNF grammars
- **Probabilistic CFG:** grammar rules carry probabilities
- **Dependency Parsing:** finds head-dependent relations between words

### Named Entity Recognition & Chunking

Shallow parsing extracts phrases and entities.

- **Named Entity Recognition:** identifying names of people, places and organisations
- **BIO Tagging:** begin, inside, outside labels for spans
- **Conditional Random Field:** discriminative sequence labelling model

## Unit 4: Semantics & Embeddings

### Lexical Semantics

Word meaning and relations between words.

- **Synonymy:** different words with the same meaning
- **WordNet:** lexical database of synsets and semantic relations
- **Word Sense Disambiguation:** choosing the correct sense of a word in context

### Vector Semantics

Words are represented as vectors from their contexts.

- **Distributional Hypothesis:** words in similar contexts have similar meanings
- **TF-IDF:** term weight by frequency times inverse document frequency
- **Cosine Similarity:** angle-based similarity of two vectors

### Word Embeddings

Dense embeddings capture semantic similarity.

- **Word2Vec:** learns embeddings using skip-gram or CBOW
- **GloVe:** embeddings from global co-occurrence statistics
- **Embedding Analogy:** vector arithmetic such as king − man + woman ≈ queen

### Semantic Role Labelling & Coreference

Deeper semantics identifies who did what to whom.

- **Semantic Role Labelling:** assigning roles like agent and patient
- **Coreference Resolution:** linking mentions that refer to the same entity
- **Discourse:** structure and coherence across sentences

## Unit 5: Transformers & Applications

### Attention & Transformers

Attention lets models weigh all positions at once.

- **Self-attention:** each token attends to every other token in the sequence
- **Transformer:** architecture of stacked attention and feed-forward layers
- **Positional Encoding:** adds order information to token embeddings

### Pretrained Language Models

Large models are pretrained then fine-tuned.

- **BERT:** bidirectional encoder pretrained with masked language modelling
- **GPT:** autoregressive decoder pretrained to predict the next token
- **Fine-tuning:** adapting a pretrained model to a specific task

### Machine Translation & Summarisation

Sequence-to-sequence tasks generate text.

- **Seq2Seq Model:** encoder-decoder mapping input to output sequences
- **BLEU Score:** n-gram overlap metric for translation quality
- **Abstractive Summarisation:** generating new sentences that summarise text

### Question Answering, Chatbots & Sentiment

Applications bring NLP to users.

- **Question Answering:** returning answers to natural-language questions
- **Chatbot:** conversational agent interacting through text
- **Sentiment Classification:** labelling text as positive, negative or neutral

## Standard Textbooks

- *Speech and Language Processing* — Jurafsky & Martin
- *Foundations of Statistical NLP* — Manning & Schütze
- *Natural Language Processing with Python* — Bird, Klein & Loper

Official syllabus: https://www.rgpv.ac.in (Scheme & Syllabus section).
