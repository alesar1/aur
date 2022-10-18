# Maintainer :  Kr1ss  $(tr +- .@ <<<'<kr1ss+x-yandex+com>')


pkgname=getmail6

pkgver=6.18.10
pkgrel=1

pkgdesc='POP3 mail retriever with reliable Maildir and command delivery; Python 3 port'
arch=('any')
url="https://$pkgname.org"
license=('GPL2')

provides=("getmail=$pkgver")
conflicts=('getmail')

makedepends=('git' 'python-setuptools')
depends=('python-chardet')
optdepends=('python-keyring: secure password store'
            'python-keyrings-alt: alternative backends')

changelog=CHANGELOG
source=("$pkgname-$pkgver.tgz::https://github.com/$pkgname/$pkgname/archive/v$pkgver.tar.gz")
b2sums=('a0597db32ff2ce43bf96feadcba4d926d48898cc412ec96e8d62086e29a364f6b806f0279878b95976e3ca7b0966afb19cb59939ef8bea1627a230518ea28602')


build() {
  cd "$pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$pkgname-$pkgver"
  PYTHONHASHSEED=0 python setup.py install --skip-build --optimize=1 --root="$pkgdir"
}


# vim: ts=2 sw=2 et ft=PKGBUILD:
