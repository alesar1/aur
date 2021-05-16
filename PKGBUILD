# Maintainer: Repentinus <aur at repentinus dot eu>

# It is the authors' firm belief this file lacks sufficient originality to
# qualify for copyright protection. In the event they are wrong, the authors
# hereby explictly waive all copyright and related or neighbouring rights to this
# work using the CC0 <https://creativecommons.org/publicdomain/zero/1.0/>.

pkgname='alacritty-colorscheme'
pkgver=1.0.0
pkgrel=2
pkgdesc="Change colorscheme of alacritty with ease"
arch=('any')
url="https://github.com/toggle-corp/alacritty-colorscheme/"
license=('Apache')
depends=('python-ruamel-yaml' 'python-typed-argument-parser' 'python-pynvim')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.tar.gz")
noextract=()
sha256sums=('9b4f9c95fb58edbef97452ba5a3fb9bfe989da4601beb0b025350cfc1acab22d')

build() {
	cd "$pkgname-$pkgver"
	python setup.py build
}

package() {
	cd "$pkgname-$pkgver"
	export PYTHONHASHSEED=0
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
