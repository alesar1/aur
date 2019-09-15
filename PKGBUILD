# Maintainer :  Kr1ss $(echo \<kr1ss+x-yandex+com\>|sed s/\+/./g\;s/\-/@/)


pkgname=dupliseek-git
pkgver() { git -C "${pkgname%-git}" describe | sed 's/^v//;s/\([^-]*-\)g/r\1/;s/-/./g'; }
pkgver=0.0.2alpha.r56.eee4fd7
pkgrel=3

pkgdesc='Duplicate image finder written in Python/Qt5'
arch=('x86_64')
url="https://gitlab.com/dupliseek-group/${pkgname%-git}"
license=('MIT')

provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")

depends=('python-pyqt5' 'python-numpy' 'python-imutils')
makedepends=('git' 'python-setuptools')

source=("git+$url.git"
        'setup.patch')
sha256sums=('SKIP'
            'ba6a53fe0cc67d4a2c3b64836b59d853b34713a566945e79af376a92d5f2a86f')

prepare() {
  cd "${pkgname%-git}"
  sed -i "s|\(/usr/share/\)icons\(/${pkgname%-git}\)|\1pixmaps\2.png|;
          s|^\(Categories=.*\)|\1\;Utility|" "${pkgname%-git}.desktop"
  install -dm755 DupliSeek
  touch DupliSeek/__init__.py
  mv GUI icons stylesheets main.py DupliSeek/
  patch -Np1 -i ../setup.patch
}

build() {
  cd "${pkgname%-git}"
  python setup.py build
}

package() {
  cd "${pkgname%-git}"
  python setup.py install --skip-build --optimize=1 --root="$pkgdir"
  install -Dm644 DupliSeek/icons/compare.png "$pkgdir/usr/share/pixmaps/${pkgname%-git}.png"
  install -Dm644 "${pkgname%-git}.desktop" -t"$pkgdir/usr/share/applications/"
  install -Dm644 README.md -t"$pkgdir/usr/share/doc/${pkgname%-git}/"
  install -Dm644 LICENSE -t"$pkgdir/usr/share/licenses/${pkgname%-git}/"
  install -dm755 "$pkgdir/usr/bin"
  ln -sf "/usr/lib/python3.7/site-packages/DupliSeek/main.py" "$pkgdir/usr/bin/${pkgname%-git}"
  chmod 755 "$pkgdir/usr/lib/python3.7/site-packages/DupliSeek/main.py"
}

# vim: ts=2 sw=2 et ft=PKGBUILD:
