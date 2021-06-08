# Maintainer: Nico <d3sox at protonmail dot com>
pkgname=nerd-fonts-sf-mono
pkgver=2.1.0
pkgrel=2
pkgdesc="Monospaced variant of San Francisco. Sourced directly from Apple, patched with the Nerd Fonts Patcher"
arch=('any')
url='https://developer.apple.com/fonts/'
license=('custom')
makedepends=('git' 'p7zip' 'python' 'fontforge' 'subversion')
conflicts=('nerd-fonts-sf-mono')
provides=('nerd-fonts-sf-mono')
source=('https://developer.apple.com/design/downloads/SF-Mono.dmg' "https://raw.githubusercontent.com/ryanoasis/nerd-fonts/v$pkgver/font-patcher" "svn+https://github.com/ryanoasis/nerd-fonts/tags/v$pkgver/src/glyphs")
sha256sums=('ec0518e310797d2f9cb924c18e3e7b661359f4fb653d1ad4315758ebcdb5ff11' '3377615be4271f8bdeef66e6f2f82ac3f3cfb7b5677abe7b8e189409da048859' 'SKIP')

build() {
  # prepare glyphs so that font-patcher can find them
  mkdir -p "$srcdir/src"
  ln -sf "$srcdir/glyphs" "$srcdir/src/glyphs"
  # remove previous files
  rm -rf SFMonoFonts
  # extract dmg
  7z x SF-Mono.dmg
  # extract pkg
  bsdtar xvPf "SFMonoFonts/SF Mono Fonts.pkg"
  bsdtar xvPf "SFMonoFonts.pkg/Payload"
  # patch fonts
  mkdir -p "$srcdir/patched"
  printf "%b" "\e[1;33m==> WARNING: \e[0mNow patching all fonts. This will take very long...\n"
  for f in "$srcdir/Library/Fonts"/*.otf; do
    printf "%b" "\e[1;32m==> \e[0mNow patching $f\n"
    # patch font quiet with complete single-width glyphs
    python "$srcdir/font-patcher" -q -c -s "$f" -out "$srcdir/patched" > /dev/null
  done
}

package() {
  # install fonts
  install -d "$pkgdir/usr/share/fonts/apple"
  install -m644 "patched"/*.otf "$pkgdir/usr/share/fonts/apple/"
}
