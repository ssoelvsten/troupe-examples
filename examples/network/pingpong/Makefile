MKID=node $(TROUPE)/rt/built/p2p/mkid.mjs
MKALIASES=node $(TROUPE)/rt/built/p2p/mkaliases.js
START=$(TROUPE)/network.sh

listener:
	$(START) zero.trp --id=ids/pingpong-listener.json --aliases=aliases.json --rspawn=true --trustmap=trustmap.json # --debug --debugp2p

dialer:
	$(START) p2ppingpong.trp --id=ids/pingpong-dialer.json --aliases=aliases.json # --debug --debugp2p

create-network-identifiers:
	mkdir -p ids
	$(MKID) --outfile=ids/pingpong-listener.json
	$(MKID) --outfile=ids/pingpong-dialer.json
	$(MKALIASES) --include ids/pingpong-listener.json --include ids/pingpong-dialer.json --outfile aliases.json
	npm install
	node mktrustmap.mjs --infile aliases.json --outfile trustmap.json

remove-network-identifiers:
	rm -rf ids
	rm -f aliases.json
	rm -f trustmap.json
