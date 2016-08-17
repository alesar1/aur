## Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>

pkgname=audiolinux
pkgver=1.7.1
pkgrel=1
pkgdesc="AudioLinux audiophile linux configuration files, scripts and shortcuts"
arch=('x86_64')
url="http://www.audio-linux.com"
license=('custom')
install=$pkgname.install
depends=()
optdepends=('linux-rt: The Linux-rt kernel and modules'
            'nvidia-last-rt: NVIDIA last drivers for linux-rt'
            'nvidia-340xx-rt: NVIDIA 340xx drivers for linux-rt'
            'rtirq: Realtime IRQ thread system tuning' 
            'rtapp: Realtime application thread priority tuning'
            'rt-tests: A collection of latency testing tools for the linux(-rt) kernel'
            'tuna: Application tuning GUI & command line utility'
            'jack2-no-dbus-git: Classic jack2 without dbus enabled. For starting as daemon with systemd'
            'minimserver: UPnP Audio Server'
            'mpd: Flexible, powerful, server-side application for playing music'
            'mpd-dsd: Flexible, powerful, server-side application for playing music, with DSD seek support'
            'hqplayer: The high-end upsampling multichannel software HD-audio player' 
            'hqplayer-embedded: Signalyst HQPlayer Embedded HQPlayer - the high-end upsampling multichannel software HD-audio player' 
            'hqplayer-network-audio-daemon: The high-end upsampling multichannel software HD-audio player' 
            'jriver-media-center: The Most Comprehensive Media Software' 
            'dff2dsf: Signalyst DFF to DSF command line conversion utility' 
            'deadbeef: A GTK+ audio player for GNU/Linux'
            'squeezelite-git: Lightweight headless squeezebox emulator'
            'logitechmediaserver-git: Streaming audio server'
            'sox-dsd-git: SoX Resampler library dsd branch')
source=('http://www.tophifi.it/ftp/packages/audiolinux.tar.gz')
sha256sums=('4d392484b83d36a2316cbd76a42c5264731bc08cbee82ea12a20e4dcfdde0cbb')

package() {
  install -d "$pkgdir/opt/$pkgname"
  bsdtar xf audiolinux.tar.gz -C "$pkgdir/opt/"
  chown -R root:root $pkgdir
}
