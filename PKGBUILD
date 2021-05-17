# Maintainer: Storm Dragon <storm_dragon@linux-a11y.org>
# Maintainer: Chrys <chrys@linux-a11y.org>

pkgname='fenrir'
pkgver=1.9.7.1
pkgrel=1
pkgdesc='A user space console screen reader written in python3'
arch=('any')
url="https://linux-a11y.org/index.php?page=fenrir-screenreader"
license=('LGPL')
depends=('espeak-ng' 'python' 'python-pyudev' 'python-daemonize' 'python-evdev' 'python-dbus' 'python-pyte')
optdepends=('brltty: For Braille support'
'gstreamer: for soundicons via gstreamer'
'socat: Control running Fenrir screenreader'
  'sox: The default sound driver'
  'python-espeak: TTS support'
  'python-pyenchant: for spell check functionality'
  'xclip: for copy to X session clipboard'
  'speech-dispatcher: TTS support')
makedepends=('python-setuptools')
install=fenrir.install
provides=('fenrir')
conflicts=('fenrir')
backup=('etc/fenrirscreenreader/settings/settings.conf')
source=("https://github.com/chrys87/${pkgname}/archive/${pkgver}.tar.gz"
  'fenrir.install'
  'fenrirscreenreader.service')
sha512sums=('f2366a2fecbb732ee8eb811b10f6cae3aed78dc634f570f962d6f41874782e6d354c2db8ac3c470e3909ed7795cc886c1ae9b06f658258881c8f51a7e8972775'
            '15ee3b4c9bc6e35fb06033c012ed51b75572062a9a164fc828743cbde1f96fa42076f078f97c8383292d14e0586c3f3a14e7777afea30993139d3927e42cb7d5'
            'dc73ab35120902222d7aab02ebd396790d0b9a7c2531746011dcd4169b5376cdd942909734dd77aae60275f537395684327759bed6fce675adac6699bbe0b262')

package() {
  install -d "$pkgdir/usr/lib/systemd/system/"
  install -Dm644 fenrirscreenreader.service "$pkgdir/usr/lib/systemd/system/fenrirscreenreader.service"
cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --force-settings --root="${pkgdir}/" --optimize=1
}

# vim: set ts=2 sw=2 et:
