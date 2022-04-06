#!/bin/bash

# Maintainer: PumpkinCheshire <me at pumpkincheshire dot com>
# Contributor: Gardar <aur@gardar.net>
# Contributor: Morten Linderud <morten@linderud.pw>

pkgname=python-anyconfig
_name=anyconfig
pkgver=0.13.0
pkgrel=1
pkgdesc='Python library provides common APIs to load and dump configuration files in various formats'
url='https://github.com/ssato/python-anyconfig'
arch=('any')
license=('MIT')
depends=(
    'python-toml'
    'python-ruamel-yaml'
    'python-jinja'
    'python-jmespath'
    'python-jsonschema'
    'python-simplejson'
    'python-yaml'
)
optdepends=(
    'python-anyconfig-bson-backend: BSON support using pymongo'
    'python-anyconfig-ion-backend: Amazon ion load and dump support'
    'python-anyconfig-cbor-backend: CBOR support using cbor'
    'python-anyconfig-cbor2-backend: CBOR support using cbor2'
    'python-anyconfig-configobj-backend: ConfigObj load and dump support'
    'python-anyconfig-msgpack-backend: MessagePack load and dump support'
    'python-anyconfig-json5-backend: Json5 load and dump support'
    'python-anyconfig-fortios-backend: Fortios load and parse support'
    'python-anyconfig-fit-backend: FITFIT (Flexible and Interoperable Data Transfer) data files load and parse support'
)
makedepends=(
    'python-setuptools'
    'python-build'
    'python-installer'
)
conflicts=('python-anyconfig-git')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
b2sums=('e9789369f7f8810abe9ac72c8c74e78fbbdc0afccebe80077fb83f469cad59734f960a560616492fb1d8e7f60d641b643468629f4238e97af2ce461c84589843')

build() {
    cd "$srcdir/$_name-$pkgver" || exit
    # export PYTHONHASHSEED=0
    # python setup.py build
    python -m build --wheel --no-isolation
}

package() {
    cd "$srcdir/$_name-$pkgver" || exit
    # python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
    python -m installer --destdir="$pkgdir" dist/*.whl
    install -Dm644 LICENSE* -t "$pkgdir/usr/share/licenses/$pkgname"
}
