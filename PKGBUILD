# Maintainer: Nico <d3sox at protonmail dot com>
pkgname=nerd-fonts-sf-mono
pkgver=2.1.0
pkgrel=8
_fontver=10
pkgdesc="Monospaced variant of San Francisco. Sourced directly from Apple, patched with the Nerd Fonts Patcher"
arch=('any')
url='https://developer.apple.com/fonts/'
license=('custom')
makedepends=('git' 'p7zip' 'python' 'fontforge' 'subversion' 'parallel')
conflicts=('nerd-fonts-sf-mono')
provides=('nerd-fonts-sf-mono')
source=("SF-Mono-$_fontver.dmg::https://developer.apple.com/design/downloads/SF-Mono.dmg" "font-patcher-$pkgver::https://raw.githubusercontent.com/ryanoasis/nerd-fonts/v$pkgver/font-patcher" "allow-glyphdir.diff" "svn+https://github.com/ryanoasis/nerd-fonts/tags/v$pkgver/src/glyphs")
sha256sums=('8e78534e64b2e49f0c268b5bb08f20e61c68b608efc836dc7329a3001c1a8d8c'
            '3377615be4271f8bdeef66e6f2f82ac3f3cfb7b5677abe7b8e189409da048859'
            '6fad8dead6215b1d8cedbbce3d1bc1fc7c1b0bb06ea70518334bd443a7ba543f'
            'SKIP')

build() {
  _patcher="font-patcher-$pkgver-glyphdir"
  # apply patch to font-patcher to allow using custom glyph directory
  patch -p1 --follow-symlinks -o "$_patcher" < allow-glyphdir.diff
  # remove previous files
  rm -rf SFMonoFonts
  # extract dmg
  7z x "SF-Mono-$_fontver.dmg"
  # extract pkg
  bsdtar xvPf "SFMonoFonts/SF Mono Fonts.pkg"
  bsdtar xvPf "SFMonoFonts.pkg/Payload"
  # patch fonts
  mkdir -p "$srcdir/patched"
  printf "%b" "\e[1;33m==> WARNING: \e[0mNow patching all fonts. This will take very long...\n"
  # patch fonts quiet with complete single-width glyphs
  parallel -j$(nproc) python "$srcdir/$_patcher" --glyphdir "$srcdir/glyphs/" -q -c -s {} -out "$srcdir/patched" &> /dev/null ::: "$srcdir/Library/Fonts"/*.otf
}

package() {
  # install fonts
  install -d "$pkgdir/usr/share/fonts/apple"
  install -m644 "patched"/*.otf "$pkgdir/usr/share/fonts/apple/"
}
