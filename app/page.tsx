"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react"

export default function MathTutorial() {
  const [currentStep, setCurrentStep] = useState(0)
  const [dividend, setDividend] = useState(10)
  const [divisor, setDivisor] = useState(2)
  const [animationStep, setAnimationStep] = useState(0)
  const [showZeroError, setShowZeroError] = useState(false)
  const [zeroSubtractionCount, setZeroSubtractionCount] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // 检测是否为移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const steps = [
    {
      title: "理解除法的本质",
      description: "除法是一种拆分的过程，将一个整体拆分成若干份。",
      content: (
        <div className="flex flex-col items-center space-y-6 w-full">
          <div className="text-center mb-4 px-2">
            <p className="text-lg">乘法是加法的叠加，而除法是拆分的过程</p>
          </div>
          <div
            className={`flex ${isMobile ? "flex-col" : "flex-row"} justify-center items-center space-y-4 md:space-y-0 md:space-x-8 w-full`}
          >
            <Card className="w-full md:w-64">
              <CardHeader className="p-4">
                <CardTitle className="text-base md:text-lg">乘法: 3 × 2 = 6</CardTitle>
                <CardDescription className="text-xs md:text-sm">叠加感: 2+2+2=6</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-4">
                <div className="flex flex-col items-center">
                  <div className="flex mb-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 md:w-10 md:h-10 bg-green-500 m-1 rounded-md flex items-center justify-center text-white font-bold text-sm md:text-base"
                      >
                        2
                      </div>
                    ))}
                  </div>
                  <div className="text-lg md:text-xl font-bold">=</div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 mt-2 rounded-md flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    6
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full md:w-64">
              <CardHeader className="p-4">
                <CardTitle className="text-base md:text-lg">除法: 6 ÷ 2 = 3</CardTitle>
                <CardDescription className="text-xs md:text-sm">拆分感: 6拆成2一份，共3份</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 mb-2 rounded-md flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    6
                  </div>
                  <div className="text-lg md:text-xl font-bold">=</div>
                  <div className="flex mt-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 md:w-10 md:h-10 bg-green-500 m-1 rounded-md flex items-center justify-center text-white font-bold text-sm md:text-base"
                      >
                        2
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "除法作为拆分",
      description: "除法可以看作是将一个整体拆分成相等的几份。",
      content: (
        <div className="flex flex-col items-center space-y-6 w-full px-2">
          <div className="text-center mb-4">
            <p className="text-base md:text-lg">10 ÷ 2 = 5 意味着将10拆分成2份，每份是5</p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            {/* Initial number */}
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-3xl md:text-4xl"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
              transition={{ duration: 1.5, times: [0, 0.5, 1], repeat: 0 }}
            >
              10
            </motion.div>

            {/* Division symbol and animation */}
            <motion.div
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              ÷
            </motion.div>

            {/* Result of division */}
            <div
              className={`flex ${isMobile ? "flex-col space-y-6" : "flex-row space-x-16"} justify-center w-full items-center`}
            >
              <motion.div
                className="border-2 border-dashed border-gray-400 p-4 rounded-lg flex flex-col items-center"
                initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? -20 : 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <div className="text-center mb-2 font-bold text-sm md:text-base">第1份</div>
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-md flex items-center justify-center text-white font-bold text-2xl md:text-3xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  5
                </motion.div>
              </motion.div>

              <motion.div
                className="border-2 border-dashed border-gray-400 p-4 rounded-lg flex flex-col items-center"
                initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <div className="text-center mb-2 font-bold text-sm md:text-base">第2份</div>
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-md flex items-center justify-center text-white font-bold text-2xl md:text-3xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.3, duration: 0.5 }}
                >
                  5
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="text-lg md:text-xl font-bold mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.5 }}
            >
              10 ÷ 2 = 5
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "除法作为重复减法",
      description: "除法也可以理解为重复减法，看看一个数能减去另一个数多少次。",
      content: (
        <div className="flex flex-col items-center space-y-6 w-full px-2">
          <div className="text-center mb-4">
            <p className="text-base md:text-lg">10 ÷ 2 = 5 也可以看作 10能减去几个2直到为0</p>
            <p className="text-xs md:text-sm text-gray-600">10 - 2 - 2 - 2 - 2 - 2 = 0，共减去5次</p>
          </div>

          <div className="w-full max-w-md">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="text-base md:text-lg font-bold">被除数: {dividend}</div>
              <div className="text-base md:text-lg font-bold">除数: {divisor}</div>
            </div>

            <div className={`${isMobile ? "flex flex-col space-y-4" : "flex flex-row space-x-4"} mb-6`}>
              <div className="flex-1">
                <p className="mb-2 text-sm md:text-base">调整被除数 (1-20):</p>
                <Slider
                  value={[dividend]}
                  min={1}
                  max={20}
                  step={1}
                  onValueChange={(value) => {
                    setDividend(value[0])
                    setAnimationStep(0)
                  }}
                />
              </div>
              <div className="flex-1">
                <p className="mb-2 text-sm md:text-base">调整除数 (1-5):</p>
                <Slider
                  value={[divisor]}
                  min={1}
                  max={5}
                  step={1}
                  onValueChange={(value) => {
                    setDivisor(value[0])
                    setAnimationStep(0)
                  }}
                />
              </div>
            </div>

            <Card className="mb-4">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center space-x-2 flex-wrap">
                  <div className="text-lg md:text-xl font-bold">{dividend}</div>
                  <div className="text-lg md:text-xl">÷</div>
                  <div className="text-lg md:text-xl font-bold">{divisor}</div>
                  <div className="text-lg md:text-xl">=</div>
                  <div className="text-lg md:text-xl font-bold">{Math.floor(dividend / divisor)}</div>
                  {dividend % divisor > 0 && (
                    <div className="text-lg md:text-xl text-gray-500">余 {dividend % divisor}</div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="relative h-16 bg-gray-100 rounded-lg mb-4 overflow-hidden">
              {[...Array(dividend)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-2 h-12 w-4 md:w-6 bg-blue-500 rounded"
                  initial={{ x: i * (isMobile ? 5 : 8) }}
                  animate={{
                    x: i * (isMobile ? 5 : 8),
                    opacity: i >= dividend - animationStep * divisor ? 0 : 1,
                    scale: i >= dividend - animationStep * divisor ? 0.5 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            <div className={`flex ${isMobile ? "flex-col space-y-3" : "flex-row justify-between"} items-center`}>
              <Button
                variant="outline"
                size={isMobile ? "sm" : "default"}
                onClick={() => setAnimationStep(Math.max(0, animationStep - 1))}
                disabled={animationStep === 0}
                className="w-full md:w-auto"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> 上一步
              </Button>

              <div className="text-center my-2">
                {animationStep > 0 ? (
                  <div className="text-sm md:text-lg">
                    {dividend} - {Array(animationStep).fill(divisor).join(" - ")} = {dividend - animationStep * divisor}
                  </div>
                ) : (
                  <div className="text-sm md:text-lg">点击"下一步"开始演示</div>
                )}
              </div>

              <Button
                variant="outline"
                size={isMobile ? "sm" : "default"}
                onClick={() =>
                  setAnimationStep(
                    Math.min(Math.floor(dividend / divisor) + (dividend % divisor > 0 ? 1 : 0), animationStep + 1),
                  )
                }
                disabled={animationStep >= Math.floor(dividend / divisor) + (dividend % divisor > 0 ? 1 : 0)}
                className="w-full md:w-auto"
              >
                下一步 <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <Button variant="ghost" className="w-full mt-4" onClick={() => setAnimationStep(0)}>
              <RefreshCw className="mr-2 h-4 w-4" /> 重置
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: "为什么不能除以零",
      description: "理解为什么任何数除以0是没有意义的。",
      content: (
        <div className="flex flex-col items-center space-y-6 w-full px-2">
          <div className="text-center mb-4">
            <p className="text-base md:text-lg">为什么不能除以0？</p>
            <p className="text-xs md:text-sm text-gray-600">从拆分和重复减法的角度理解</p>
          </div>

          <Tabs defaultValue="split" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="split" className="text-xs md:text-sm">
                拆分角度
              </TabsTrigger>
              <TabsTrigger value="subtract" className="text-xs md:text-sm">
                重复减法角度
              </TabsTrigger>
            </TabsList>

            <TabsContent value="split" className="space-y-4">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-base md:text-lg">拆分角度: 10 ÷ 0 = ?</CardTitle>
                  <CardDescription className="text-xs md:text-sm">将10拆分成0份是没有意义的</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-xl md:text-2xl">
                      10
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-sm md:text-base">如果除以0，意味着要把10拆分成0份</p>
                    <p className="text-red-500 font-bold mt-2 text-sm md:text-base">这在逻辑上是不可能的!</p>
                    <p className="mt-2 text-xs md:text-sm">不能把一个东西分成0份，因为0份意味着什么都没有</p>
                  </div>
                </CardContent>
              </Card>

              <Button variant="outline" className="w-full" onClick={() => setShowZeroError(true)}>
                尝试计算 10 ÷ 0
              </Button>

              {showZeroError && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                >
                  <strong className="font-bold">错误!</strong>
                  <span className="block sm:inline text-sm md:text-base"> 除数不能为零。</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setShowZeroError(false)}>
                    <svg
                      className="fill-current h-5 w-5 md:h-6 md:w-6 text-red-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <title>关闭</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </motion.div>
              )}
            </TabsContent>

            <TabsContent value="subtract" className="space-y-4">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-base md:text-lg">重复减法角度: 10 ÷ 0 = ?</CardTitle>
                  <CardDescription className="text-xs md:text-sm">10能减去几个0直到为0？</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="text-center mb-4">
                    <p className="text-base md:text-lg font-medium">尝试通过减去0来将10减至0</p>
                    <p className="text-xs md:text-sm text-gray-500">点击下方按钮多次，观察进度条变化</p>
                  </div>

                  {/* 新增的进度条可视化 */}
                  <div className="space-y-4">
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200 text-blue-800">
                            起始值: 10
                          </span>
                        </div>
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-red-200 text-red-800">
                            目标: 0
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mb-2 flex-wrap">
                        <div className="text-xs md:text-sm font-medium">当前值:</div>
                        <div className="text-base md:text-lg font-bold text-blue-600">10</div>
                        <div className="text-xs md:text-sm text-gray-500">(已减去 {zeroSubtractionCount} 个0)</div>
                      </div>

                      <div className="overflow-hidden h-6 md:h-8 text-xs flex rounded-lg bg-gray-200">
                        <motion.div
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                          style={{ width: "100%" }}
                          initial={{ width: "100%" }}
                          animate={{
                            width: "100%",
                            backgroundColor: zeroSubtractionCount > 5 ? ["#3b82f6", "#ef4444", "#3b82f6"] : "#3b82f6",
                          }}
                          transition={{
                            duration: zeroSubtractionCount > 5 ? 0.5 : 0,
                            repeat: zeroSubtractionCount > 5 ? 1 : 0,
                          }}
                        >
                          <span className="font-bold text-xs md:text-sm">10</span>
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <Button
                        variant="outline"
                        size={isMobile ? "default" : "lg"}
                        className="mb-4 w-full"
                        onClick={() => {
                          // 增加减0的次数
                          setZeroSubtractionCount((prev) => prev + 1)
                        }}
                      >
                        减去 0 ({zeroSubtractionCount}次)
                      </Button>

                      {zeroSubtractionCount > 0 && (
                        <motion.div
                          className="text-center p-3 md:p-4 bg-yellow-50 rounded-lg border border-yellow-200 w-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-yellow-800 text-xs md:text-sm">
                            <span className="font-bold">观察:</span> 无论减去多少个0，10始终是10
                          </p>
                          {zeroSubtractionCount > 5 && (
                            <p className="text-yellow-700 mt-2 text-xs">
                              你已经减去了{zeroSubtractionCount}个0，但进度条没有任何变化！
                            </p>
                          )}
                        </motion.div>
                      )}

                      {zeroSubtractionCount > 10 && (
                        <motion.div
                          className="mt-4 md:mt-6 p-3 md:p-4 bg-red-50 rounded-lg border border-red-200 w-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-red-800 font-bold text-center mb-2 text-sm md:text-base">
                            这就是为什么除以0没有意义!
                          </p>
                          <p className="text-red-700 text-xs md:text-sm">
                            从重复减法的角度看，10 ÷ 0意味着"10能减去多少个0等于0"。
                            但无论减去多少个0，结果始终是10，永远无法达到0。 这个过程永远不会结束，所以10 ÷
                            0在数学上是没有定义的。
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      ),
    },
    {
      title: "总结",
      description: "回顾我们学到的除法概念。",
      content: (
        <div className="flex flex-col items-center space-y-6 w-full px-2">
          <div className="text-center mb-4">
            <p className="text-lg md:text-xl font-bold">除法的本质</p>
          </div>

          <Card className="w-full max-w-md">
            <CardHeader className="p-4">
              <CardTitle className="text-base md:text-lg">除法的两种理解方式</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="p-3 md:p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold text-green-800 text-sm md:text-base">1. 拆分感</h3>
                <p className="text-xs md:text-sm">除法是将一个整体拆分成若干等份的过程</p>
                <p className="mt-2 font-semibold text-xs md:text-sm">例如: 10 ÷ 2 = 5</p>
                <p className="text-xs md:text-sm">意味着将10拆分成2份，每份是5</p>
              </div>

              <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-blue-800 text-sm md:text-base">2. 重复减法</h3>
                <p className="text-xs md:text-sm">除法可以看作是一个数能减去另一个数多少次</p>
                <p className="mt-2 font-semibold text-xs md:text-sm">例如: 10 ÷ 2 = 5</p>
                <p className="text-xs md:text-sm">意味着10能减去5个2: 10 - 2 - 2 - 2 - 2 - 2 = 0</p>
              </div>

              <div className="p-3 md:p-4 bg-red-50 rounded-lg">
                <h3 className="font-bold text-red-800 text-sm md:text-base">为什么不能除以0</h3>
                <p className="text-xs md:text-sm">从拆分角度: 不能把一个数拆分成0份</p>
                <p className="text-xs md:text-sm">从重复减法角度: 减去无数个0也无法使被除数变为0</p>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <p className="text-xs md:text-sm text-gray-500">
                这种理解方式帮助我们更直观地掌握除法的本质，而不仅仅是机械地应用公式。
              </p>
            </CardFooter>
          </Card>
        </div>
      ),
    },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      // 重置零除法的计数器
      if (currentStep === 3) {
        setZeroSubtractionCount(0)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      // 重置零除法的计数器
      if (currentStep === 3) {
        setZeroSubtractionCount(0)
      }
    }
  }

  return (
    <div className="container mx-auto py-4 md:py-8 px-2 md:px-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-xl md:text-2xl">数学思维可视化: 理解除法的本质</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            通过交互式演示理解除法作为拆分和重复减法的概念
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 md:p-6">
          <div className="mb-4 md:mb-6">
            <div className="flex items-center justify-between mb-2 md:mb-4 flex-wrap gap-2">
              <h2 className="text-lg md:text-xl font-bold">{steps[currentStep].title}</h2>
              <div className="text-xs md:text-sm text-gray-500">
                步骤 {currentStep + 1} / {steps.length}
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-600">{steps[currentStep].description}</p>
          </div>

          <div className="min-h-[300px] md:min-h-[400px] flex items-center justify-center">
            {steps[currentStep].content}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-4 md:p-6 flex-wrap gap-3">
          <Button
            variant="outline"
            size={isMobile ? "sm" : "default"}
            onClick={prevStep}
            disabled={currentStep === 0}
            className="w-[45%] md:w-auto"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            上一步
          </Button>

          <Button
            size={isMobile ? "sm" : "default"}
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="w-[45%] md:w-auto"
          >
            下一步
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
