# Maintainer: Evgeniy Filimonov <evgfilim1@gmail.com>

_pyname='aiogram'
pkgname="python-${_pyname}"
pkgver=2.11.2
pkgrel=2
pkgdesc="A pretty simple and fully asynchronous library for Telegram Bot API written in Python 3.7 with asyncio and aiohttp"
arch=('any')
url="https://github.com/${_pyname}/${_pyname}"
license=('MIT')
depends=(
    'python>=3.7'
    'python-aiohttp>=3.5.4' 'python-aiohttp<4.0.0'
    'python-babel>=2.6.0'
    'python-certifi>=2019.3.9'
)
makedepends=(
    'python-setuptools'
)
optdepends=(
    'python-uvloop: fast, drop-in replacement of the built-in asyncio event loop'
    'python-ujson: ultra fast JSON encoder and decoder written in pure C'
    'python-rapidjson: extremely fast C++ JSON parser and serialization library'
    'python-emoji: emojize and demojize support'
    'python-aioredis: Redis storage support'
    'python-aiohttp-socks: SOCKS4(a) and SOCKS5 proxy support'
#    'python-rethinkdb: RethinkDB storage support'  # No such package yet
)
source=("${url}/archive/v${pkgver}.tar.gz")
sha256sums=('8a56570704a278534c9158c832a307b82215df1608c076d7a4842a7fc77e75d6')

build() {
    cd "$srcdir/${_pyname}-${pkgver}"
    python setup.py build
}

package() {
    cd "$srcdir/${_pyname}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build

    install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.rst"
}

# vim: ft=sh ts=4 sw=4 et 
