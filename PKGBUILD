# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>
# Co-Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=gonha
pkgver=1.8.5
pkgrel=1
pkgdesc='Light-weight system monitor for Linux'
arch=('any')
url='https://github.com/fredcox/gonha'
license=('MIT')
depends=('python-pyqt5'
         'python-ewmh'
         'python-psutil'
         'python-humanfriendly'
         'python-pathlib2'
         'python-pyinquirer'
         'python-distro'
         'python-py-cpuinfo'
         'python-requests'
         'python-netifaces'
         'python-country_list'
         'python-portolan'
         'python-unit-convert'
         'python-coloredlogs'
         'python-numpy'
         'python-pyamdgpuinfo'
         'python-prompt_toolkit1014'
         'ttf-fira-code'
         'hddtemp')
makedepends=('python-setuptools')
source=("https://pypi.org/packages/source/${pkgname:0:1}/$pkgname/$pkgname-$pkgver.tar.gz"
        'https://github.com/fredcox/gonha/raw/master/LICENSE')
sha256sums=('d8f4178effa60a9293d498c80472eb7e0e85aa516df50ab8362f616ad7ee6b41'
            '6ad1a8e638684d561aa06d48bf6adc181f5893beb513460d9a664a1da43bd101')

package() {
	cd "$pkgname-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1

	install -Dm644 $srcdir/LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
