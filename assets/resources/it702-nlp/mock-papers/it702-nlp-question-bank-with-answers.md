# CSIT-702(D) Natural Language Processing — Question Bank with Answer Hints

## Unit 1: Text Processing Basics

### Short answer (2-3 marks)

- **Q.** Define *NLP*.  
  **Ans.** field enabling computers to process human language
- **Q.** Define *Ambiguity*.  
  **Ans.** one expression having several meanings
- **Q.** Define *Corpus*.  
  **Ans.** large structured collection of texts
- **Q.** Define *Tokenisation*.  
  **Ans.** splitting text into tokens such as words
- **Q.** Define *Stemming*.  
  **Ans.** crude suffix stripping, e.g. Porter stemmer
- **Q.** Define *Lemmatisation*.  
  **Ans.** reducing words to dictionary base forms
- **Q.** Define *Regular Expression*.  
  **Ans.** pattern describing a set of strings
- **Q.** Define *Minimum Edit Distance*.  
  **Ans.** fewest insertions, deletions and substitutions between strings
- **Q.** Define *Levenshtein Distance*.  
  **Ans.** edit distance with unit costs
- **Q.** Define *Morpheme*.  
  **Ans.** smallest meaningful unit of language
- **Q.** Define *Inflectional Morphology*.  
  **Ans.** changes grammatical features, e.g. walk to walked
- **Q.** Define *Finite-state Transducer*.  
  **Ans.** automaton mapping between surface and lexical forms

### Long answer (7 marks)

- **Q.** Explain *NLP Pipeline & Challenges* in detail with a neat diagram.  
  **Key points:** NLP turns raw text into structured meaning. NLP — field enabling computers to process human language; Ambiguity — one expression having several meanings; Corpus — large structured collection of texts.
- **Q.** Explain *Tokenisation & Normalisation* in detail with a neat diagram.  
  **Key points:** Text is split and standardised before analysis. Tokenisation — splitting text into tokens such as words; Stemming — crude suffix stripping, e.g. Porter stemmer; Lemmatisation — reducing words to dictionary base forms.
- **Q.** Explain *Regular Expressions & Edit Distance* in detail with a neat diagram.  
  **Key points:** Pattern matching and string similarity are core tools. Regular Expression — pattern describing a set of strings; Minimum Edit Distance — fewest insertions, deletions and substitutions between strings; Levenshtein Distance — edit distance with unit costs.
- **Q.** Explain *Morphology* in detail with a neat diagram.  
  **Key points:** Morphology studies the structure of words. Morpheme — smallest meaningful unit of language; Inflectional Morphology — changes grammatical features, e.g. walk to walked; Finite-state Transducer — automaton mapping between surface and lexical forms.

## Unit 2: Language Modelling

### Short answer (2-3 marks)

- **Q.** Define *Language Model*.  
  **Ans.** assigns probabilities to word sequences
- **Q.** Define *Bigram Model*.  
  **Ans.** P(w given previous word) estimated from counts
- **Q.** Define *Markov Assumption*.  
  **Ans.** next word depends only on a few previous words
- **Q.** Define *Laplace Smoothing*.  
  **Ans.** add-one to every count
- **Q.** Define *Kneser-Ney Smoothing*.  
  **Ans.** uses continuation counts for lower-order models
- **Q.** Define *Backoff*.  
  **Ans.** falling back to shorter n-grams when counts are zero
- **Q.** Define *Perplexity*.  
  **Ans.** inverse probability of test data normalised by length
- **Q.** Define *Held-out Set*.  
  **Ans.** data reserved for tuning and evaluation
- **Q.** Define *Out-of-vocabulary Word*.  
  **Ans.** word not seen in training
- **Q.** Define *RNN Language Model*.  
  **Ans.** predicts next word using recurrent hidden state
- **Q.** Define *LSTM*.  
  **Ans.** recurrent unit with gates handling long-range dependencies
- **Q.** Define *Teacher Forcing*.  
  **Ans.** feeding true previous tokens during training

### Long answer (7 marks)

- **Q.** Explain *N-gram Language Models* in detail with a neat diagram.  
  **Key points:** N-grams estimate word probabilities from counts. Language Model — assigns probabilities to word sequences; Bigram Model — P(w given previous word) estimated from counts; Markov Assumption — next word depends only on a few previous words.
- **Q.** Explain *Smoothing* in detail with a neat diagram.  
  **Key points:** Smoothing handles unseen n-grams. Laplace Smoothing — add-one to every count; Kneser-Ney Smoothing — uses continuation counts for lower-order models; Backoff — falling back to shorter n-grams when counts are zero.
- **Q.** Explain *Perplexity & Evaluation* in detail with a neat diagram.  
  **Key points:** Language models are compared by perplexity. Perplexity — inverse probability of test data normalised by length; Held-out Set — data reserved for tuning and evaluation; Out-of-vocabulary Word — word not seen in training.
- **Q.** Explain *Neural Language Models* in detail with a neat diagram.  
  **Key points:** Neural networks model language with dense vectors. RNN Language Model — predicts next word using recurrent hidden state; LSTM — recurrent unit with gates handling long-range dependencies; Teacher Forcing — feeding true previous tokens during training.

## Unit 3: Syntax & Parsing

### Short answer (2-3 marks)

- **Q.** Define *POS Tag*.  
  **Ans.** label such as noun, verb or adjective
- **Q.** Define *HMM Tagger*.  
  **Ans.** hidden Markov model tagging with transition and emission probabilities
- **Q.** Define *Viterbi Algorithm*.  
  **Ans.** dynamic programming for the most likely tag sequence
- **Q.** Define *Context-Free Grammar*.  
  **Ans.** rules rewriting a non-terminal into symbols
- **Q.** Define *Parse Tree*.  
  **Ans.** tree showing how a sentence derives from the grammar
- **Q.** Define *Treebank*.  
  **Ans.** corpus annotated with parse trees, e.g. Penn Treebank
- **Q.** Define *CKY Algorithm*.  
  **Ans.** bottom-up dynamic programming parser for CNF grammars
- **Q.** Define *Probabilistic CFG*.  
  **Ans.** grammar rules carry probabilities
- **Q.** Define *Dependency Parsing*.  
  **Ans.** finds head-dependent relations between words
- **Q.** Define *Named Entity Recognition*.  
  **Ans.** identifying names of people, places and organisations
- **Q.** Define *BIO Tagging*.  
  **Ans.** begin, inside, outside labels for spans
- **Q.** Define *Conditional Random Field*.  
  **Ans.** discriminative sequence labelling model

### Long answer (7 marks)

- **Q.** Explain *Part-of-Speech Tagging* in detail with a neat diagram.  
  **Key points:** POS tagging labels each word's grammatical class. POS Tag — label such as noun, verb or adjective; HMM Tagger — hidden Markov model tagging with transition and emission probabilities; Viterbi Algorithm — dynamic programming for the most likely tag sequence.
- **Q.** Explain *Context-Free Grammars* in detail with a neat diagram.  
  **Key points:** CFGs describe sentence structure. Context-Free Grammar — rules rewriting a non-terminal into symbols; Parse Tree — tree showing how a sentence derives from the grammar; Treebank — corpus annotated with parse trees, e.g. Penn Treebank.
- **Q.** Explain *Parsing Algorithms* in detail with a neat diagram.  
  **Key points:** Parsers find structures licensed by a grammar. CKY Algorithm — bottom-up dynamic programming parser for CNF grammars; Probabilistic CFG — grammar rules carry probabilities; Dependency Parsing — finds head-dependent relations between words.
- **Q.** Explain *Named Entity Recognition & Chunking* in detail with a neat diagram.  
  **Key points:** Shallow parsing extracts phrases and entities. Named Entity Recognition — identifying names of people, places and organisations; BIO Tagging — begin, inside, outside labels for spans; Conditional Random Field — discriminative sequence labelling model.

## Unit 4: Semantics & Embeddings

### Short answer (2-3 marks)

- **Q.** Define *Synonymy*.  
  **Ans.** different words with the same meaning
- **Q.** Define *WordNet*.  
  **Ans.** lexical database of synsets and semantic relations
- **Q.** Define *Word Sense Disambiguation*.  
  **Ans.** choosing the correct sense of a word in context
- **Q.** Define *Distributional Hypothesis*.  
  **Ans.** words in similar contexts have similar meanings
- **Q.** Define *TF-IDF*.  
  **Ans.** term weight by frequency times inverse document frequency
- **Q.** Define *Cosine Similarity*.  
  **Ans.** angle-based similarity of two vectors
- **Q.** Define *Word2Vec*.  
  **Ans.** learns embeddings using skip-gram or CBOW
- **Q.** Define *GloVe*.  
  **Ans.** embeddings from global co-occurrence statistics
- **Q.** Define *Embedding Analogy*.  
  **Ans.** vector arithmetic such as king − man + woman ≈ queen
- **Q.** Define *Semantic Role Labelling*.  
  **Ans.** assigning roles like agent and patient
- **Q.** Define *Coreference Resolution*.  
  **Ans.** linking mentions that refer to the same entity
- **Q.** Define *Discourse*.  
  **Ans.** structure and coherence across sentences

### Long answer (7 marks)

- **Q.** Explain *Lexical Semantics* in detail with a neat diagram.  
  **Key points:** Word meaning and relations between words. Synonymy — different words with the same meaning; WordNet — lexical database of synsets and semantic relations; Word Sense Disambiguation — choosing the correct sense of a word in context.
- **Q.** Explain *Vector Semantics* in detail with a neat diagram.  
  **Key points:** Words are represented as vectors from their contexts. Distributional Hypothesis — words in similar contexts have similar meanings; TF-IDF — term weight by frequency times inverse document frequency; Cosine Similarity — angle-based similarity of two vectors.
- **Q.** Explain *Word Embeddings* in detail with a neat diagram.  
  **Key points:** Dense embeddings capture semantic similarity. Word2Vec — learns embeddings using skip-gram or CBOW; GloVe — embeddings from global co-occurrence statistics; Embedding Analogy — vector arithmetic such as king − man + woman ≈ queen.
- **Q.** Explain *Semantic Role Labelling & Coreference* in detail with a neat diagram.  
  **Key points:** Deeper semantics identifies who did what to whom. Semantic Role Labelling — assigning roles like agent and patient; Coreference Resolution — linking mentions that refer to the same entity; Discourse — structure and coherence across sentences.

## Unit 5: Transformers & Applications

### Short answer (2-3 marks)

- **Q.** Define *Self-attention*.  
  **Ans.** each token attends to every other token in the sequence
- **Q.** Define *Transformer*.  
  **Ans.** architecture of stacked attention and feed-forward layers
- **Q.** Define *Positional Encoding*.  
  **Ans.** adds order information to token embeddings
- **Q.** Define *BERT*.  
  **Ans.** bidirectional encoder pretrained with masked language modelling
- **Q.** Define *GPT*.  
  **Ans.** autoregressive decoder pretrained to predict the next token
- **Q.** Define *Fine-tuning*.  
  **Ans.** adapting a pretrained model to a specific task
- **Q.** Define *Seq2Seq Model*.  
  **Ans.** encoder-decoder mapping input to output sequences
- **Q.** Define *BLEU Score*.  
  **Ans.** n-gram overlap metric for translation quality
- **Q.** Define *Abstractive Summarisation*.  
  **Ans.** generating new sentences that summarise text
- **Q.** Define *Question Answering*.  
  **Ans.** returning answers to natural-language questions
- **Q.** Define *Chatbot*.  
  **Ans.** conversational agent interacting through text
- **Q.** Define *Sentiment Classification*.  
  **Ans.** labelling text as positive, negative or neutral

### Long answer (7 marks)

- **Q.** Explain *Attention & Transformers* in detail with a neat diagram.  
  **Key points:** Attention lets models weigh all positions at once. Self-attention — each token attends to every other token in the sequence; Transformer — architecture of stacked attention and feed-forward layers; Positional Encoding — adds order information to token embeddings.
- **Q.** Explain *Pretrained Language Models* in detail with a neat diagram.  
  **Key points:** Large models are pretrained then fine-tuned. BERT — bidirectional encoder pretrained with masked language modelling; GPT — autoregressive decoder pretrained to predict the next token; Fine-tuning — adapting a pretrained model to a specific task.
- **Q.** Explain *Machine Translation & Summarisation* in detail with a neat diagram.  
  **Key points:** Sequence-to-sequence tasks generate text. Seq2Seq Model — encoder-decoder mapping input to output sequences; BLEU Score — n-gram overlap metric for translation quality; Abstractive Summarisation — generating new sentences that summarise text.
- **Q.** Explain *Question Answering, Chatbots & Sentiment* in detail with a neat diagram.  
  **Key points:** Applications bring NLP to users. Question Answering — returning answers to natural-language questions; Chatbot — conversational agent interacting through text; Sentiment Classification — labelling text as positive, negative or neutral.

