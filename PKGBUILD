# Maintainer: Michal Krenek (Mikos) <m.krenek@gmail.com>
pkgname=qspectrumanalyzer
pkgver=1.5.0
pkgrel=1
pkgdesc="Spectrum analyzer for multiple SDR platforms (PyQtGraph based GUI for soapy_power, rx_power, rtl_power, hackrf_sweep and other backends)"
arch=('any')
url="https://github.com/xmikos/qspectrumanalyzer"
license=('GPL3')
depends=('python-pyqt4' 'python-pyqtgraph' 'soapy_power')
makedepends=('python-setuptools')
optdepends=(
  'rtl_power_fftw-git: alternative RTL-SDR backend using FFTW library (much faster than rtl_power)'
  'rtl-sdr-keenerd-git: better version of rtl_power backend'
  'rtl-sdr: original rtl_power backend (slightly broken, use rtl-sdr-keenerd-git instead)'
  'rx_tools: rx_power backend (universal SoapySDR based backend, but seems slow and buggy)'
  'hackrf: hackrf_sweep backend (wideband spectrum monitoring with sweep rate of 8 GHz/s)'
)
source=(https://github.com/xmikos/qspectrumanalyzer/archive/v$pkgver.tar.gz)
sha256sums=('9af3e43149a9886580d5e67f7fbb1c15e4c29760d613225ce5ddd377f979a665')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py install --root="$pkgdir"
}

# vim:set ts=2 sw=2 et:
