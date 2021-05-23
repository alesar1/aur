# Maintainer: Groctel <aur@taxorubio.com>
# Maintainer: Naveen M K <naveen@syrusdark.website>

pkgbase=manimce
pkgname=manim
pkgver=0.6.0
pkgrel=3
pkgdesc="Animation engine for explanatory math videos (community edition)."
arch=('any')
url="https://www.manim.community/"
license=('MIT' 'custom')
depends=(
	'ffmpeg'
	'python'
	'python-cairo'
	'python-click'
	'python-click-default-group'
	'python-colour'
	'python-decorator'
	'python-numpy'
	'python-pillow'
	'python-pygments'
	'python-requests'
	'python-rich'
	'python-scipy'
	'python-setuptools'
	'python-tqdm'
	'python-watchdog'
	'python-networkx'
	# Aur dependencies
	'python-cloup'
	'python-glcontext'
	'python-manimpango'
	'python-mapbox-earcut'
	'python-moderngl-git'
	'python-moderngl-window'
	'python-pydub'
)
makedepends=(
	'python-setuptools'
)
optdepends=(
	'texlive-most: latex support'
)
conflicts=('python-manimlib')
provides=()
source=("https://github.com/ManimCommunity/$pkgname/releases/download/v$pkgver/$pkgname-$pkgver.tar.gz")
sha512sums=('f197926f39f48b363ba7e089fec9f05e684bca0efa22668dcf488fc523356aa333e93f1489bd899f370d10f7a71505376535f4eca422ed9cf6f5358f5a6805c5')

prepare() {
	cd "$srcdir/$pkgname-$pkgver"
	sed -i 's/rich>=6.0,<7.0/rich/' setup.py
	sed -i 's/decorator<5.0.0/decorator/' setup.py
	sed -i 's/click>=7.1,<8.0/click/' setup.py
	sed -i 's/cloup>=0.7.0,<0.8.0/cloup>=0.8.0/' setup.py
}

build() {
	cd "$srcdir/$pkgname-$pkgver"
	python setup.py build
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
	install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -D -m644 LICENSE.community "$pkgdir/usr/share/licenses/$pkgname/LICENSE.community"
}

