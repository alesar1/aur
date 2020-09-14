# Maintainer: Thomas Chung <thomas@nomology.id.au>
# Contributor: Maurizio Porrato <maurizio.porrato@gmail.com>

pkgname=janus-gateway-git
pkgver=0.10.5.r8.ge94612e6
pkgrel=1
pkgdesc="An open source, general purpose, WebRTC server"
arch=('x86_64' 'i686')
url='https://janus.conf.meetecho.com'
license=('GPL3')
depends=('glib2'
         'jansson'
         'libconfig'
         'libmicrohttpd'
         'libnice'
         'libsrtp'
         'libusrsctp-git'
         'openssl')
optdepends=('libwebsockets: WebSockets support for Janus API'
            'librabbitmq-c: RabbitMQ support for the Janus API or events'
            'paho-mqtt-c-git: MQTT support for the Janus API or events'
            'nanomsg: Nanomsg support for the Janus API'
            'curl: TURN REST API support, RTSP support in Streaming/Event Handler plugin'
            'sofia-sip: SIP plugin'
            'opus: Bridge plugin'
            'libogg: Voicemail plugin and/or post-processor'
            'ffmpeg: Post-processor'
            'lua: Lua plugin')
makedepends=('curl'
             'ffmpeg'
             'gengetopt'
             'libogg'
             'librabbitmq-c'
             'libwebsockets'
             'lua'
             'nanomsg'
             'opus'
             'paho-mqtt-c-git'
             'sofia-sip'
             'git')
provides=(janus-gateway)
conflicts=(janus-gateway)
source=('git+https://github.com/meetecho/janus-gateway.git'
        'local://systemd.service'
        'local://sysusers.conf')
sha256sums=('SKIP'
            'cf2b6c8fdcd60ccfa179c4cd207a23ee7edfee90588c2c3847aa6cda418bed7f'
            'bd6d7615e722adb64816fae3c5323f6aeb1b9561c39f1652568ed494ffdaa191')

pkgver() {
    cd "janus-gateway"
    git describe --long | sed -r 's/([^-]*-g)/r\1/;s/-/./g;s/^v//'
}

build() {
    cd "janus-gateway"
    ./autogen.sh
    ./configure \
        --prefix /usr \
        --sysconfdir /etc \
        --disable-docs \
        --enable-json-logger \
        --enable-mqtt \
        --enable-plugin-duktape \
        --enable-plugin-lua \
        --enable-post-processing \
        --enable-rabbitmq
    make
}

package() {
    cd "janus-gateway"
    make DESTDIR="$pkgdir" install configs
    backup+=($(cd "$pkgdir" && echo "etc/janus/"*.jcfg))
    install -Dm644 "$srcdir/systemd.service" "$pkgdir/usr/lib/systemd/system/janus-gateway.service"
    install -Dm644 "$srcdir/sysusers.conf" "$pkgdir/usr/lib/sysusers.d/janus-gateway.conf"
}
