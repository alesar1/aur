.PHONY: all

all: clean rebuild srcinfo

rebuild:
	updpkgsums
	makepkg -s

srcinfo:
	makepkg --printsrcinfo > .SRCINFO

clean:
	rm -rf pkg src chatterino2-appimage-*.tar.* *.AppImage
