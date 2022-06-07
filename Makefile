.PHONY: build
build:
	@makepkg
	@makepkg --printsrcinfo > .SRCINFO

.PHONY: clean
clean:
	@rm -rf manjaro-zsh-config*
	@rm -rf pkg src
