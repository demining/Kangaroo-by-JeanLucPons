# Pollard’s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range

<p>In this article, we will look at the fastest algorithm for ECDLP from the field of computational number theory, Pollard’s kangaroo is also called Pollard’s lambda algorithm.</p>
<p>Pollard’s kangaroo method computes&nbsp;&nbsp;<a href="https://cryptodeep.ru/doc/discretelog.pdf" target="_blank" rel="noreferrer noopener"><strong>discrete logarithms</strong></a>&nbsp;&nbsp;in arbitrary cyclic groups.&nbsp;It is applied if the discrete logarithm is known to lie in a certain range, say&nbsp;&nbsp;<code>[ a , b ]</code>, and then has an expected time to execute the bulk operation.</p>
<h2>Pollard’s Kangaroo Advantage:</h2>
<ul>
<li>uses very little memory</li>
<li>can be parallelized with linear acceleration</li>
<li>memory requirements can be effectively tracked</li>
</ul>
<blockquote class="wp-block-quote"><p><em>All this makes the kangaroo method the most powerful method for solving the discrete logarithm problem.</em></p></blockquote>
<h2>One way to break ECDSA signature schemes is to solve the discrete logarithm problem.</h2>
<p>In settings&nbsp;&nbsp;<code>ECDSA</code>&nbsp;, sub-exponential time algorithms, such as the index calculus method, are not used, and the best known solution method underlying them today&nbsp;&nbsp;<code>DLP</code>&nbsp;is the Pollard kangaroo method.&nbsp;We will try not to burden you with various theoretical aspects.&nbsp;Let’s move on to the experimental part.</p>
<p>As we know in the Bitcoin blockchain, the sender of BTC coins always reveals his&nbsp;&nbsp;<em>public key</em>&nbsp;.</p>
<p>For the Pollard kangaroo method, it is enough to know&nbsp;&nbsp;<em>the public key</em>&nbsp;&nbsp;or&nbsp;&nbsp;<em>signature</em>&nbsp;<code>R</code>&nbsp;&nbsp;value (the value&nbsp;&nbsp;<code>R</code>&nbsp;is also a kind of&nbsp;&nbsp;<em>public key</em>&nbsp;&nbsp;from&nbsp;&nbsp;<code>Nonces</code>&nbsp;because it is a coordinate point&nbsp;&nbsp;<code>x</code>&nbsp;on the elliptic curve plane&nbsp;&nbsp;<code>secp256k1</code>)</p>
<blockquote class="wp-block-quote"><p><em>It remains only to define the range&nbsp;</em>&nbsp;<code>PRIVATE KEY</code>&nbsp;<em>or range</em>&nbsp;<code>NONCES</code>&nbsp;.</p></blockquote>
<p>It happens that some devices that create signatures&nbsp;<code>ECDSA</code>in the Bitcoin blockchain can partially disclose bytes of information about the value&nbsp;<code>"K" (NONCES)</code></p>
<p>We believe that this is a potential threat of losing BTC coins and strongly recommend that everyone always update the software and use only verified devices.</p>
<p>In the recent past, we did cryptanalysis on the Bitcoin blockchain and found several such transactions.</p>
<h2>So take a look at this Bitcoin Address with a withdrawal amount of 501.06516041 BTC</h2>
<figure class="wp-block-image"><img title="" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/3d9756d50d09b0584c5967175184dd42.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p>In the transactions of this Bitcoin Address&nbsp;&nbsp;<a href="https://btc.exan.tech/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE" target="_blank" rel="noreferrer noopener"><strong>14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE</strong></a>&nbsp;, there was a partial disclosure of bytes of information about the value&nbsp;<code>"K" (NONCES)</code></p>
<p>As we know from our last&nbsp;&nbsp;<a href="https://cryptodeep.ru/lattice-attack/" target="_blank" rel="noreferrer noopener"><strong><u>article</u></strong></a></p>
<figure class="wp-block-image"><img title="habr.com/en/post/671932/" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/2f678fd0faefca8c25518666490d795f.png" alt="habr.com/en/post/671932/"><figcaption>habr.com/en/post/671932/</figcaption></figure>
<h2>Finding a Secret Key Range</h2>
<p>Let’s find this transaction and use Pollard’s kangaroo method to&nbsp;&nbsp;<em><u>recover the private key</u></em></p>
<p>Earlier we recorded&nbsp; a&nbsp;<em>video instruction</em>&nbsp;:&nbsp;&nbsp;<a href="https://cryptodeep.ru/terminal-google-colab/" target="_blank" rel="noreferrer noopener">«TERMINAL in Google Colab create all the conveniences for working in GITHUB»</a></p>
<p>Open Google Colab in&nbsp;&nbsp;<a href="https://github.com/demining/TerminalGoogleColab"><strong>Terminal [TerminalGoogleColab]</strong></a></p>
<p>To search for RawTX, we will use the repository&nbsp;&nbsp;<a href="https://github.com/demining/CryptoDeepTools/tree/main/01BlockchainGoogleDrive" target="_blank" rel="noreferrer noopener">«01BlockchainGoogleDrive»</a></p>
<pre class="wp-block-code"><code>git clone https://github.com/demining/CryptoDeepTools.git

cd CryptoDeepTools/01BlockchainGoogleDrive/

chmod +x getrawtx.sh

./getrawtx.sh 14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE</code></pre>
<figure class="wp-block-image"><img title="Run Bash script: getrawtx.sh" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/49630fb12d6c1cf64f99f24f530add95.png" alt="Run Bash script: getrawtx.sh"><figcaption>Run Bash script: getrawtx.sh</figcaption></figure>
<p>All contents of the Bitcoin Address&nbsp;&nbsp;<a href="https://btc.exan.tech/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE" target="_blank" rel="noreferrer noopener">14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE</a>&nbsp;transaction &nbsp;were saved to the file:&nbsp;<code>RawTX.json</code></p>
<p>Open the file:&nbsp;&nbsp;<code>RawTX.json</code>&nbsp;and find this transaction&nbsp;<code>[строка №10]</code></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/2c1dca20782c1e09325836c491aeaaf0.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p>Let’s use the command&nbsp;&nbsp;<code>export</code>&nbsp;and save this line&nbsp;&nbsp;<code>№10</code>&nbsp;from&nbsp;&nbsp;<code>RawTX.json</code>separately to&nbsp;<code>RawTX.txt</code></p>
<pre class="wp-block-code"><code>export LINE=10 ; sed -n "${LINE}p" RawTX.json &gt; RawTX.txt</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/b8b0c25080dfe2ad36c112e2f0015e72.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<pre class="wp-block-code"><code>cat RawTX.txt</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/b1aa44976ad24df74e02246a8747db31.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p>Let&nbsp; ‘s find out, open the&nbsp;<a href="https://live.blockcypher.com/btc/decodetx/" target="_blank" rel="noreferrer noopener"><strong>Decode Raw Bitcoin Hexadecimal Transaction</strong></a><code>TxID</code>&nbsp;&nbsp;website&nbsp;&nbsp;&nbsp;and insert our&nbsp;&nbsp;As a result, we get TxID<code>RawTX</code></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/1662922df068e4d009f0efcbecc2089d.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h4>As a result, we get TxID</h4>
<figure class="wp-block-image"><img title="TxID: b5add54960756c58ebabb332c5ef89098d2c3b8f2107b939ec542178e846108b" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/cc2bf5146ef7a2e6004d79986535255d.png" alt="TxID: b5add54960756c58ebabb332c5ef89098d2c3b8f2107b939ec542178e846108b"><figcaption>TxID: b5add54960756c58ebabb332c5ef89098d2c3b8f2107b939ec542178e846108b</figcaption></figure>
<p>Open the link TxID:<br>
<a href="https://btc.exan.tech/tx/b5add54960756c58ebabb332c5ef89098d2c3b8f2107b939ec542178e846108b" target="_blank" rel="noreferrer noopener">https://btc.exan.tech/tx/b5add54960756c58ebabb332c5ef89098d2c3b8f2107b939ec542178e846108b</a></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/c325a8e40de9ca6f15431dac1dcfe274.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<figure class="wp-block-image"><img title="Checking RawTX" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/3b28d1648bf0cf157833dbc3b0821fd8.png" alt="Checking RawTX"><figcaption>Checking RawTX</figcaption></figure>
<p>Now we find out the partial disclosure of bytes of information about the value&nbsp;<code>"K" (NONCES)</code></p>
<p>To do this, we will use the script&nbsp;<code>«RangeNonce»</code></p>
<blockquote class="wp-block-quote"><p><code>«RangeNonce»</code>&nbsp;is a script to find the range of the secret key</p></blockquote>
<p>Let’s choose the version for the distribution kit&nbsp;&nbsp;<code>GNU/Linux</code>&nbsp;.&nbsp;<code>Google Colab</code>&nbsp;provides&nbsp;<code>UBUNTU 18.04</code></p>
<figure class="wp-block-image"><img title="RangeNonce" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/94dd82af4d7155e548aa7241df9b3206.png" alt="RangeNonce"><figcaption>RangeNonce</figcaption></figure>
<p>Upload all files to&nbsp;<code>Google Colab</code></p>
<figure class="wp-block-image"><img title="RangeNonce + Google Colab" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/75191d9a233987a74ed0fa016aa5e2a1.png" alt="RangeNonce + Google Colab"><figcaption>RangeNonce + Google Colab</figcaption></figure>
<p>Let’s allow permissions for the script and run the script&nbsp;<code>«RangeNonce»</code></p>
<p><strong>Teams:</strong></p>
<pre class="wp-block-code"><code>chmod +x RangeNonce
./RangeNonce
cat Result.txt</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/8ff5460c3570ebbbb3c7fb0f6a394fd9.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h4>Everything will be saved to a file: Result.txt</h4>
<figure class="wp-block-image"><img title="result.txt" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/2af471f7eb46f84157b402ed67ea9139.png" alt="result.txt"><figcaption>result.txt</figcaption></figure>
<h2>This is the partial disclosure of bytes of information the value of «K» (NONCES)</h2>
<p><em>So our&nbsp;&nbsp;<u>secret key</u>&nbsp;&nbsp;is in&nbsp;&nbsp;<u>the range</u>&nbsp;:</em></p>
<pre class="wp-block-code"><code>K = 070239c013e8f40c8c2a0e608ae15a6b00000000000000000000000000000000
K = 070239c013e8f40c8c2a0e608ae15a6bffffffffffffffffffffffffffffffff</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/204ef79845ae3d93a9c93d43f81e484b.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<blockquote class="wp-block-quote"><p><strong>Pay attention</strong>&nbsp;to the initial&nbsp;&nbsp;<code>32</code>&nbsp;digits and letters&nbsp;&nbsp;<code>HEX</code>&nbsp;of the format, the value of the signature&nbsp;&nbsp;<code>Z</code>&nbsp;matches&nbsp;&nbsp;<em><u>the range of the secret key</u></em>&nbsp;&nbsp;, that is, the value&nbsp;<code>"K" (NONCES)</code></p></blockquote>
<h2>This is a very serious ECDSA signature error</h2>
<p>As we said above, for the Pollard kangaroo method, it is enough to know&nbsp;&nbsp;<em>the public key</em>&nbsp;&nbsp;or&nbsp;<em>&nbsp;signature</em>&nbsp;<code>R</code>&nbsp;&nbsp;value (the value&nbsp;&nbsp;<code>R</code>&nbsp;is also a kind of&nbsp;&nbsp;<em>public key</em>&nbsp;&nbsp;from&nbsp;&nbsp;<code>Nonces</code>&nbsp;because it is a coordinate point&nbsp;&nbsp;<code>x</code>&nbsp;on the elliptic curve plane&nbsp;&nbsp;<code>secp256k1</code>)</p>
<p><em>Signature</em>&nbsp;&nbsp;value&nbsp;&nbsp;<code>R</code>&nbsp;in our case:</p>
<pre class="wp-block-code"><code>R = 83fe1c06236449b69a7bee5be422c067d02c4ce3f4fa3756bd92c632f971de06</code></pre>
<p>The script&nbsp;&nbsp;<code>RangeNonce</code>&nbsp;added the&nbsp;&nbsp;<em>prefix</em>&nbsp;<code>02</code>&nbsp;we needed by &nbsp;creating a&nbsp;&nbsp;<em>compressed public key</em></p>
<pre class="wp-block-code"><code>K_PUBKEY = 0283fe1c06236449b69a7bee5be422c067d02c4ce3f4fa3756bd92c632f971de06</code></pre>
<h3>Now we have information:</h3>
<ul>
<li><em>secret key range</em></li>
<li><em>compressed public key</em></li>
</ul>
<p>Let’s use the source code to build the&nbsp;&nbsp;<a href="https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons" target="_blank" rel="noreferrer noopener"><strong>Pollard’s Kangaroo</strong></a>&nbsp;program &nbsp;from the French developer Jean-Luc PONS</p>
<blockquote class="wp-block-quote"><p>Please note that you can assemble on your own&nbsp;&nbsp;<code>CUDA</code>&nbsp;to&nbsp;&nbsp;<code>GPU</code>&nbsp;increase&nbsp;&nbsp;<strong><em><u>the speed of calculations.</u></em></strong></p></blockquote>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/afc280ae86d3febb27f1008e8927ae89.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p>We will do a normal assembly for the CPU</p>
<p><strong>Teams:</strong></p>
<pre class="wp-block-code"><code>cd /

cd content/CryptoDeepTools/06KangarooJeanLucPons/

ls</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/394eceecf11f26952a6fc87a10be2dbc.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<pre class="wp-block-code"><code>sudo apt-get update</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/2bce90cd55b48787511363f9976adbd6.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<pre class="wp-block-code"><code>sudo apt-get install g++ -y
sudo apt-get install libgmp3-dev libmpfr-dev -y</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/707e190da23fd6b83eead65bce771b5b.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p><em>After all the package installations, we will build by running a simple command:</em></p>
<pre class="wp-block-code"><code>make</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/663476ae36f13e98d23f8ee3e879b545.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/1ea932dd2bd751c24fa95821c6833523.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h2>Assembly was successful!</h2>
<pre class="wp-block-code"><code>Проверим версию:

./kangaroo -v</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/76df5253202c44d068af867a812d11db.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h4>So, we have created a version of «Kangaroo v2.2»</h4>
<p>To demonstrate the performance&nbsp;&nbsp;<code>«Kangaroo v2.2»</code>&nbsp;for&nbsp; let’s&nbsp;<code>CPU</code>raise the range and save everything to a file:&nbsp;<code>rangepubkey.txt</code></p>
<h4>Open a text file: rangepubkey.txt</h4>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/8ac477f4c2423dc5ff4cce2407481540.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<pre class="wp-block-code"><code>070239c013e8f40c8c2a0e608ae15a6b23d4a09295be678b2100000000000000
070239c013e8f40c8c2a0e608ae15a6b23d4a09295be678b21ffffffffffffff
0283fe1c06236449b69a7bee5be422c067d02c4ce3f4fa3756bd92c632f971de06</code></pre>
<pre class="wp-block-code"><code>Очистим терминал командой:

clear</code></pre>
<p>Run&nbsp;&nbsp;<code>«Kangaroo v2.2»</code>&nbsp;the result will be&nbsp;&nbsp;<em>automatically saved</em>&nbsp;&nbsp;to a file:&nbsp;<code>savenonce.txt</code></p>
<pre class="wp-block-code"><code>./kangaroo -ws -w save.work -wi 30 -o savenonce.txt rangepubkey.txt</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/ae877a6f49f7781d70cf6a986deea751.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/5eb0b22e395bd62b5a577a37ba2bebef.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/e2d6a1e3ab4cd4bb5be0c58eed1ca6f7.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h2>The search time took 1 min.&nbsp;18 sec.</h2>
<p><em>Result in file:</em>&nbsp;<code>savenonce.txt</code></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/76bfb1f4e28f14cebba9b68c31e510ec.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p><em>Let</em>&nbsp;‘s open the &nbsp;file:&nbsp;<code>savenonce.txt</code></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/50d1fd7aecc8ea69cdb12d8f73830d8b.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h3>We got the secret key, this is the value of «K» (NONCES)</h3>
<pre class="wp-block-code"><code>Key# 0 [1S]Pub:  0x0283FE1C06236449B69A7BEE5BE422C067D02C4CE3F4FA3756BD92C632F971DE06 
       Priv: 0x70239C013E8F40C8C2A0E608AE15A6B23D4A09295BE678B21A5F1DCEAE1F634 


070239C013E8F40C8C2A0E608AE15A6B23D4A09295BE678B21A5F1DCEAE1F634

K = 070239c013e8f40c8c2a0e608ae15a6b00000000000000000000000000000000 # RangeNonce
K = 070239C013E8F40C8C2A0E608AE15A6B23D4A09295BE678B21A5F1DCEAE1F634 # NONCES
K = 070239c013e8f40c8c2a0e608ae15a6bffffffffffffffffffffffffffffffff # RangeNonce</code></pre>
<h2>private key</h2>
<p>Now knowing the value,&nbsp;&nbsp;<code>"K" (NONCES)</code>&nbsp;we will&nbsp;&nbsp;<em><u>restore the private key</u></em>&nbsp;&nbsp;to the Bitcoin Address:&nbsp;&nbsp;<a href="https://btc.exan.tech/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE" target="_blank" rel="noreferrer noopener"><strong>14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE</strong></a></p>
<p>Let’s go back to the beginning, as we remember, the script&nbsp;&nbsp;<code>«RangeNonce»</code>&nbsp;revealed to us&nbsp;&nbsp;<em>information</em>&nbsp;about the range value&nbsp;&nbsp;<code>"K" (NONCES)</code>, as well as&nbsp;&nbsp;<em>information</em>&nbsp;<code>SIGNATURES</code></p>
<figure class="wp-block-image"><img title="SIGNATURES" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/d710d3fa1cf97ab16e33f7f824c2fb87.png" alt="SIGNATURES"><figcaption>SIGNATURES</figcaption></figure>
<pre class="wp-block-code"><code>R = 83fe1c06236449b69a7bee5be422c067d02c4ce3f4fa3756bd92c632f971de06
S = 7405249d2aa9184b688f5307006fddc3bd4a7eb89294e3be3438636384d64ce7
Z = 070239c013e8f40c8c2a0e608ae15a6b1bb4b8fbcab3cff151a6e4e8e05e10b7</code></pre>
<p>Get the private key using the formula in Python&nbsp;<em>script</em>&nbsp;:&nbsp;&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/02BreakECDSAcryptography/calculate.py" target="_blank" rel="noreferrer noopener">calculate.py</a></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/b407d280edbe126f6ec21ac1c1ffa539.svg" alt="PRIVKEY = ((((S * K) - Z) * ​​modinv(R,N)) % N)"></figure>
<pre class="wp-block-code"><code><strong>def</strong> <strong>h</strong>(n):
    <strong>return</strong> hex(n).replace("0x","")

<strong>def</strong> <strong>extended_gcd</strong>(aa, bb):
    lastremainder, remainder = abs(aa), abs(bb)
    x, lastx, y, lasty = 0, 1, 1, 0
    <strong>while</strong> remainder:
        lastremainder, (quotient, remainder) = remainder, divmod(lastremainder, remainder)
        x, lastx = lastx - quotient*x, x
        y, lasty = lasty - quotient*y, y
    <strong>return</strong> lastremainder, lastx * (-1 <strong>if</strong> aa &lt; 0 <strong>else</strong> 1), lasty * (-1 <strong>if</strong> bb &lt; 0 <strong>else</strong> 1)

<strong>def</strong> <strong>modinv</strong>(a, m):
    g, x, y = extended_gcd(a, m)
    <strong>if</strong> g != 1:
        <strong>raise</strong> ValueError
    <strong>return</strong> x % m
    
N = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141
R = 0x83fe1c06236449b69a7bee5be422c067d02c4ce3f4fa3756bd92c632f971de06
S = 0x7405249d2aa9184b688f5307006fddc3bd4a7eb89294e3be3438636384d64ce7
Z = 0x070239c013e8f40c8c2a0e608ae15a6b1bb4b8fbcab3cff151a6e4e8e05e10b7
K = 0x070239C013E8F40C8C2A0E608AE15A6B23D4A09295BE678B21A5F1DCEAE1F634

<strong>print</strong> (h((((S * K) - Z) * modinv(R,N)) % N))</code></pre>
<p>Teams:</p>
<pre class="wp-block-code"><code>wget https://raw.githubusercontent.com/demining/CryptoDeepTools/main/02BreakECDSAcryptography/calculate.py

python3 calculate.py
</code></pre>
<figure class="wp-block-image"><img title="PRIVKEY=23d4a09295be678b21a5f1dceae1f634a69c1b41775f680ebf8165266471401b" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/8031f11893dbb7de1d90858ae8ba634a.png" alt="PRIVKEY=23d4a09295be678b21a5f1dceae1f634a69c1b41775f680ebf8165266471401b"><figcaption>PRIVKEY=23d4a09295be678b21a5f1dceae1f634a69c1b41775f680ebf8165266471401b</figcaption></figure>
<pre class="wp-block-code"><code>ADDR: 14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE
WIF:  5J64pq77XjeacCezwmAr2V1s7snvvJkuAz8sENxw7xCkikceV6e
HEX:  23d4a09295be678b21a5f1dceae1f634a69c1b41775f680ebf8165266471401b</code></pre>
<figure class="wp-block-image"><img title="Checking the private key on the bitaddress website" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/d8c78d8eb14e5246b495e09f59631e44.png" alt="Checking the private key on the bitaddress website"><figcaption>Checking the private key on the bitaddress website</figcaption></figure>
<h2>Private key found!</h2>
<figure class="wp-block-image"><img title="www.blockchain.com/btc/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/ed97dac1dc07e2bce09fe0951d9f64de.png" alt="www.blockchain.com/btc/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE"><figcaption>www.blockchain.com/btc/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE</figcaption></figure>
<p>This video was created for the&nbsp;&nbsp;<a href="https://cryptodeep.ru/" target="_blank" rel="noreferrer noopener"><strong>CRYPTO DEEP TECH</strong></a>&nbsp;portal &nbsp;to ensure the financial security of data and cryptography on elliptic curves&nbsp;&nbsp;<code>secp256k1</code>&nbsp;against weak signatures&nbsp;&nbsp;<code>ECDSA</code>&nbsp;in cryptocurrency&nbsp;<code>BITCOIN</code></p>
<p><a href="https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons" target="_blank" rel="noreferrer noopener"><strong><u>Source</u></strong></a></p>
<p><strong>Telegram:&nbsp;&nbsp;</strong><a href="https://t.me/cryptodeeptech" target="_blank" rel="noreferrer noopener"><strong>https://t.me/cryptodeeptech</strong></a></p>


---


|  | Donation Address |
| --- | --- |
| ♥ __BTC__ | 1Lw2kh9WzCActXSGHxyypGLkqQZfxDpw8v |
| ♥ __ETH__ | 0xaBd66CF90898517573f19184b3297d651f7b90bf |
