# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=apostrophe
pkgver=2.5
pkgrel=1
pkgdesc="A distraction free Markdown editor for GNU/Linux made with GTK+"
arch=('any')
url="https://gitlab.gnome.org/World/apostrophe"
license=('GPL3')
depends=('webkit2gtk' 'gspell' 'python-pypandoc' 'python-regex' 'python-levenshtein'
         'python-pyenchant' 'python-gobject' 'python-cairo' 'otf-fira-mono' 'libhandy')
makedepends=('meson' 'gobject-introspection' 'sassc')
optdepends=('texlive-latexextra: for the pdftex module'
            'mathjax: for formula preview')
checkdepends=('appstream-glib')
source=("https://gitlab.gnome.org/World/apostrophe/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
sha256sums=('366b239ea7bb720c11fc7344827b6739e4983132c9932aa4705a3b88533d75e4')

build() {
  arch-meson "$pkgname-v$pkgver" build
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs
}

package() {
  DESTDIR="$pkgdir" meson install -C build
}
