# Maintainer: j.r <j.r@jugendhacker.de>
_pkgname=tg
pkgname=telegram-$_pkgname
pkgver=0.19.0
pkgrel=2
pkgdesc="terminal telegram client that really works"
arch=('any')
url="https://github.com/paul-nameless/tg"
license=('Unlicense')
depends=('python-telegram=0.15.0' 'python3' 'python-setuptools')
makedepends=('python-build' 'python-installer' 'python-wheel' 'python-poetry')
optdepends=(
	'libnotify: for notifications, you could also use other programs: see config'
	'ffmpeg: to record voice msgs and upload videos correctly'
	'urlview: to choose urls when there is multiple in message, use URL_VIEW in config file to use another app, it should accept urls in stdin'
	'ranger: can be used to choose file when sending, customizable with FILE_PICKER_CMD'
	'nnn: can be used to choose file when sending, customizable with FILE_PICKER_CMD'
	'fzf: to create groups and secret chats, used for single and multiple user selection'
)
conflicts=('telegram-tg-git')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
md5sums=('8ce8894aa02552526f912954e33c2174')

build() {
	cd "$srcdir/$_pkgname-$pkgver"

	python -m build --wheel --no-isolation
}

package() {
	cd "$srcdir/$_pkgname-$pkgver"

	python -m installer --destdir="$pkgdir" dist/*.whl
}
