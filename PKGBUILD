# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: iRet <iRet at a22 dot in>
# Contributor: XavierCLL <xavier.corredor.llano at gmail dot com>

pkgname=spotify-ripper
pkgver=2.18
pkgrel=3
pkgdesc='CLI Spotify ripper'
arch=('any')
url="https://github.com/scaronni/spotify-ripper"
license=('MIT')
depends=(
	'python-pyspotify'
	'python-spotipy'
	'python-mutagen'
	'python-colorama'
	'python-requests'
	'python-schedule'
	'lame')
optdepends=(
	'ffmpeg'
	'flac: Rip songs to lossless FLAC encoding'
	'opus-tools: Rip songs to Opus encoding'
	'vorbis-tools: Rip songs to Ogg Vorbis encoding'
	'faac: Rip songs to AAC format with FreeAAC'
	'fdkaac: Rip songs to MP4/M4A format with Fraunhofer FDK AAC codec')
makedepends=('python-setuptools' 'python-build' 'python-installer' 'python-wheel')
install=spotify-ripper.install
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz"
        '001-setup.py.patch')
sha256sums=('2536ec8a8b395f594a47e6f9aee1412d03109b6c06d43ee4563e45550138f950'
            '527eaeed0947406598f215fae3bb6fe150dbdeb3599e98f15807f519dbdff7b9')

prepare() {
	patch -p1 -d "$pkgname-$pkgver" < 001-setup.py.patch
	sed -i 's/>=.*$//' "$pkgname-$pkgver/requirements.txt"
}

build() {
	cd "$pkgname-$pkgver"
	python -m build --wheel --no-isolation
}

package() {
	cd "$pkgname-$pkgver"
	PYTHONHASHSEED=0 python -m installer --destdir="$pkgdir/" dist/*.whl
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
	install -Dm644 default_config.ini -t "$pkgdir/usr/share/$pkgname/"
	local _site="$(python -c 'import site; print(site.getsitepackages()[0])')"
	install -d "$pkgdir/usr/share/licenses/$pkgname/"
	ln -s \
		"$_site/${pkgname/-/_}-$pkgver.dist-info/LICENSE" \
		"$pkgdir/usr/share/licenses/$pkgname/"
}
