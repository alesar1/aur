# Maintainer: Juri Grabowski <archlinux-aur@jugra.de>
# Python package author: SSH-MITM Dev-Team <support@ssh-mitm.at>
pkgname=python-ssh-mitm
_pkgname=ssh-mitm
pkgver=0.6.3
pkgrel=1
pkgdesc='SSH mitm server for security audits supporting public key authentication, session hijacking and file manipulation.'
arch=('any')
url='https://ssh-mitm.at'
license=('LGPL3')
depends=('python' 'python-paramiko' 'python-pytz' 'python-distutils-extra')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/5f/3d/10b17e2fb622a9f4b8eea89bc1be93537515d64f57e59b209acb9142dd6e/$_pkgname-$pkgver.tar.gz")
sha512sums=('4baa7fdaabbf7bbc71885eb97365e006a9275654be01a66319f2004caa249a0b723eccb750d93b0ecfcbbf8faad889ba589f7a952db40c03a386594c50c565b4')

build() {
  cd "$_pkgname-$pkgver"

  python setup.py build
}

package() {
  cd "$_pkgname-$pkgver"

  python setup.py install --root="$pkgdir" --prefix=/usr -O1 --skip-build
}
