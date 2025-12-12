import { Layout, useTheme } from '@tot/ui-kit'
import {
  AlertProcess,
  Button,
  CardStatic,
  Caption,
  Text,
  TextField,
  Title,
  EAlertType,
  EButtonTheme,
  ECaptionSize,
  ECardTheme,
  EComponentSize,
  EFontType,
  ETextSize,
  ETitleSize,
} from '@sberbusiness/triplex-next'
import { useState, type ChangeEvent, type FormEvent } from 'react'

const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:4000'

const App = () => {
  const currentTheme = useTheme()
  const [name, setName] = useState('Анна Смирнова')
  const [email, setEmail] = useState('')
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const [alertVisible, setAlertVisible] = useState(true)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormMessage(
      `Профиль обновлён: ${name || '—'}, ${email || 'e-mail не задан'}.`
    )
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <Layout
      menuProps={{
        baseUrl: API_BASE,
        menuId: 'VKIIw4zpK-wnEuFag4GXO',
        activeAppId: 'test-1',
        systemTitle: 'Test Shell',
      }}
    >
      <div style={{ padding: 32, maxWidth: 960 }}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          tempore ut officia facilis ratione at sequi deleniti. Doloribus
          voluptatum ab excepturi, neque consequatur iste sapiente vitae
          recusandae, possimus reprehenderit nemo. Eligendi quae modi fugiat
          perferendis totam similique possimus quasi? Inventore animi natus non
          ducimus reprehenderit odit consectetur consequuntur recusandae facere?
        </div>
        <header style={{ marginBottom: 24 }}>
          <Title size={ETitleSize.H2} tag='h1'>
            Демонстрация темы @tot/ui-kit + Triplex
          </Title>
          <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
            Переключай тему в левом меню и смотри, как меняются фон и текст.
          </Text>
          <div
            style={{
              marginTop: 16,
              padding: 16,
              backgroundColor:
                currentTheme === 'light'
                  ? 'rgba(0,0,0,0.05)'
                  : 'rgba(255,255,255,0.1)',
              borderRadius: 8,
              border: `2px solid ${
                currentTheme === 'light' ? '#e0e0e0' : '#555'
              }`,
            }}
          >
            <Text size={ETextSize.B2} style={{ fontWeight: 'bold' }}>
              🎨 Текущая тема:{' '}
              {currentTheme === 'light' ? 'Светлая ☀️' : 'Тёмная 🌙'}
            </Text>
          </div>
        </header>

        {/* Блок типографики */}
        <section className='app-section'>
          <Title size={ETitleSize.H3} tag='h2'>
            Типографика
          </Title>
          <div className='stack'>
            <Text size={ETextSize.B1}>
              Основной текст B1 — ключевые сообщения интерфейса.
            </Text>
            <Text size={ETextSize.B2} type={EFontType.SECONDARY}>
              B2 — дополнительная информация.
            </Text>
            <Caption size={ECaptionSize.C1} type={EFontType.TERTIARY}>
              Caption C1 — служебные подписи и комментарии.
            </Caption>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <Title size={ETitleSize.H3} tag='h2'>
            Типографика
          </Title>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Text size={ETextSize.B1}>
              Основной текст B1 — ключевые сообщения интерфейса.
            </Text>
            <Text size={ETextSize.B2} type={EFontType.SECONDARY}>
              B2 — дополнительная информация.
            </Text>
            <Caption size={ECaptionSize.C1} type={EFontType.TERTIARY}>
              Caption C1 — служебные подписи и комментарии.
            </Caption>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <Title size={ETitleSize.H3} tag='h2'>
            Форма профиля
          </Title>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              marginTop: 8,
            }}
          >
            <TextField
              label='Имя'
              inputProps={{
                value: name,
                placeholder: 'Введите имя',
                onChange: handleNameChange,
              }}
            />
            <TextField
              label='E-mail'
              inputProps={{
                value: email,
                placeholder: 'Введите e-mail',
                type: 'email',
                onChange: handleEmailChange,
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <Button
                theme={EButtonTheme.GENERAL}
                type='submit'
                size={EComponentSize.MD}
              >
                Сохранить
              </Button>
              {formMessage && (
                <Caption size={ECaptionSize.C1} type={EFontType.SUCCESS}>
                  {formMessage}
                </Caption>
              )}
            </div>
          </form>
        </section>

        <section style={{ marginBottom: 32 }}>
          <Title size={ETitleSize.H3} tag='h2'>
            Системное уведомление
          </Title>
          <div style={{ marginTop: 8 }}>
            {alertVisible ? (
              <AlertProcess
                type={EAlertType.INFO}
                closable
                onClose={() => setAlertVisible(false)}
              >
                <Text size={ETextSize.B3}>Демо-уведомление Triplex.</Text>
                <Caption size={ECaptionSize.C1} type={EFontType.SECONDARY}>
                  Переключи тему через левое меню и посмотри, как меняются фон,
                  текст и компоненты.
                </Caption>
              </AlertProcess>
            ) : (
              <Button
                theme={EButtonTheme.SECONDARY}
                size={EComponentSize.SM}
                onClick={() => setAlertVisible(true)}
              >
                Показать уведомление
              </Button>
            )}
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <Title size={ETitleSize.H3} tag='h2'>
            Кнопки
          </Title>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              marginTop: 8,
            }}
          >
            <Button theme={EButtonTheme.GENERAL} size={EComponentSize.MD}>
              Основное действие
            </Button>
            <Button theme={EButtonTheme.DANGER} size={EComponentSize.MD}>
              Опасное действие
            </Button>
            <Button theme={EButtonTheme.SECONDARY} size={EComponentSize.MD}>
              Вторичная кнопка
            </Button>
            <Button theme={EButtonTheme.LINK} size={EComponentSize.MD}>
              Ссылка
            </Button>
          </div>
        </section>

        <section>
          <Title size={ETitleSize.H3} tag='h2'>
            Карточка предложения
          </Title>
          <div style={{ marginTop: 8 }}>
            <CardStatic theme={ECardTheme.GENERAL}>
              <CardStatic.Content
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  padding: 16,
                }}
              >
                <Title size={ETitleSize.H3} tag='h3'>
                  Бизнес‑карта «Всё включено»
                </Title>
                <Text size={ETextSize.B3} type={EFontType.SECONDARY}>
                  До 5% кешбэка на ключевые категории, бесплатное обслуживание и
                  быстрые платежи в один клик.
                </Text>
                <Button
                  theme={EButtonTheme.SECONDARY_LIGHT}
                  size={EComponentSize.SM}
                >
                  Подробнее
                </Button>
              </CardStatic.Content>
            </CardStatic>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default App
