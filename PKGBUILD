# Maintainer: Carl George < arch at cgtx dot us >

_name="sanic"
pkgname="python-$_name"
pkgver=0.5.2
pkgrel=1
pkgdesc="A microframework based on uvloop, httptools, and learnings of flask"
arch=("any")
url="https://github.com/channelcat/sanic"
license=("MIT")
makedepends=("python-setuptools")
source=("https://files.pythonhosted.org/packages/source/${_name:0:1}/$_name/$_name-$pkgver.tar.gz"
        "https://raw.githubusercontent.com/channelcat/sanic/$pkgver/LICENSE")
sha256sums=('24cff094c5ba83232b48e15bb0a5a63da502ca11d0dd3e574870a578ed0bbf38'
            'a406579cd136771c705c521db86ca7d60a6f3de7c9b5460e6193a2df27861bde')

build() {
    cd "$_name-$pkgver"
    python setup.py build
}

package() {
    depends=("python-uvloop>=0.5.3"
             "python-httptools>=0.0.9"
             "python-ujson>=1.35"
             "python-aiofiles>=0.3.0"
             "python-websockets>=3.2")
    cd "$_name-$pkgver"
    python setup.py install --skip-build --root="$pkgdir" --optimize=1
    install -D --mode 644 --target-directory "$pkgdir/usr/share/licenses/$pkgname" "$srcdir/LICENSE"
}
