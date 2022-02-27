# Maintainer: Groctel <aur@taxorubio.com>
# Maintainer: Naveen M K <naveen521kk@gmail.com>

pkgbase=manimce
pkgname=manim
pkgver=0.15.0
pkgrel=1
pkgdesc="Animation engine for explanatory math videos (community edition)."

arch=('any')
license=('MIT' 'custom')
url="https://github.com/ManimCommunity/manim"

source=("$url/releases/download/v$pkgver/$pkgname-$pkgver.tar.gz")
sha512sums=('0b31e26dfa21a0e2f6ee6bef1f786a0f2c1ce2727c698d87cca7b5a8e4d8240ec4252da99bcfd14a601305ed24a6531ed8d492faaacbe4159e408c4fad643a06')

conflicts=('python-manimlib')

depends=(
	'ffmpeg'
	'python'
	'python-cairo'
	'python-click'
	'python-click-default-group'
	'python-colour'
	'python-decorator'
	'python-google-api-core'
	'python-importlib-metadata'
	'python-numpy'
	'python-pillow'
	'python-pygments'
	'python-requests'
	'python-rich'
	'python-scipy'
	'python-setuptools'
	'python-tqdm'
	# 'python-watchdog' uses AUR's git version while community is OOD
	'python-networkx'
	# Aur dependencies
	'python-cloup'
	'python-backports.cached_property'
	'python-glcontext'
	'python-isosurfaces'
	'python-manimpango'
	'python-mapbox-earcut'
	'python-moderngl-git'
	'python-moderngl-window'
	'python-pydub'
	'python-screeninfo'
	'python-skia-pathops'
	'python-srt'
	'python-watchdog-git'
)
makedepends=(
	'python-setuptools'
)
optdepends=(
	'jupyterlab: Jupyter something'
	'python-grpcio-tools: WebGL renderer'
	'texlive-core: LaTeX support'
)

prepare ()
{
	cd "$srcdir/$pkgname-$pkgver"
	sed -i 's/cloup>=0.7.0,<0.8.0/cloup/g' setup.py
	sed -i 's/mapbox-earcut>=0.12.10,<0.13.0/mapbox-earcut/g' setup.py
	sed -i 's/screeninfo>=0.6.7,<0.7.0/screeninfo/g' setup.py
	sed -i 's/srt>=3.5.0,<4.0.0/srt/g' setup.py
	sed -i 's/manimpango>=0.3.0,<0.4.0/manimpango/g' setup.py
}

build ()
{
	cd "$srcdir/$pkgname-$pkgver"
	python setup.py build
}

package ()
{
	cd "$srcdir/$pkgname-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
	install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -D -m644 LICENSE.community "$pkgdir/usr/share/licenses/$pkgname/LICENSE.community"
}
